import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  className?: string;
  videoSrc?: string;
}

export default function VideoPlayer({ className = "", videoSrc = "https://www.youtube.com/watch?v=zo7i8VTpfNM" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true); // Start with playing state since video is auto-played
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update current time and duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
    };
  }, []);

  // Handle play/pause toggle
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle mute/unmute toggle
  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle click on video frame
  const handleVideoClick = () => {
    handleMuteUnmute();
  };

  // Handle rewind 10 seconds
  const handleRewind = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(video.currentTime - 10, 0);
  };

  // Handle fullscreen toggle
  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

  // Calculate progress bar width with accelerating start and decelerating end
  const calculateProgressWidth = () => {
    if (duration === 0) return '0%';
    const progress = currentTime / duration;
    const acceleratingFactor = Math.pow(progress, 0.5); // Faster at the start, slower at the end
    return `${acceleratingFactor * 100}%`;
  };

  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      {/* Video Container */}
      <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-auto cursor-pointer"
          src={videoSrc}
          autoPlay
          muted={isMuted}
          onClick={handleVideoClick}
        ></video>

        {/* Mute Overlay */}
        {isMuted && (
          <div
            className="absolute inset-0 bg-blue-600/90 flex items-center justify-center cursor-pointer"
            onClick={handleMuteUnmute}
          >
            <div className="text-white text-center">
              <Volume2 className="w-10 h-10 md:w-16 md:h-16 mx-auto" />
              <p className="mt-2 text-sm md:text-lg font-bold">
                Tu Video se Está Reproduciendo<br />
                Haz Clic Aquí Para Escuchar
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-2 flex items-center">
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        {/* Rewind Button */}
        <button
          onClick={handleRewind}
          className="text-white hover:text-blue-400 transition-colors mx-2"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {/* Volume Control */}
        <button
          onClick={handleMuteUnmute}
          className="text-white hover:text-blue-400 transition-colors mx-2"
        >
          <Volume2 className="w-5 h-5" />
        </button>

        {/* Progress Bar */}
        <div className="flex-grow mx-4">
          <div className="relative bg-gray-600 h-1 rounded-full">
            <div
              className="absolute top-0 left-0 bg-blue-500 h-1 rounded-full transition-all duration-300"
              style={{ width: calculateProgressWidth() }}
            ></div>
          </div>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={handleFullscreen}
          className="text-white hover:text-blue-400 transition-colors"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}