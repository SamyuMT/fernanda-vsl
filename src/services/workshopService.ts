import workshopsData from '../data/workshops.json';

// Interfaz para feature individual
export interface WorkshopFeature {
  title: string;
  description: string;
}

// Interfaz para el tipo de datos de workshop
export interface Workshop {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  modality: string;
  price: number;
  originalPrice: number;
  linkpay: string;
  image: string;
  features: string[];
  targetAudience: string[];
  
  // Campos adicionales para la página de detalle
  detailPage?: {
    videoUrl: string;
    ctaButtonText: string;
    contentSection: {
      title: string;
      description: string;
      features: WorkshopFeature[];
    };
    targetSection: {
      title: string;
      description: string;
      subtitle: string;
      subdescription: string;
    };
    ctaButtonSecondaryText: string;
  };
}

// Simula una consulta a webhook con delay para mayor realismo
export const fetchWorkshops = async (): Promise<Workshop[]> => {
  try {
    // Simula latencia de red
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // En el futuro aquí iría la llamada real al webhook
    // const response = await fetch('/api/workshops');
    // return response.json();
    
    // Por ahora devolvemos el JSON local
    return workshopsData.workshops;
  } catch (error) {
    console.error('Error fetching workshops:', error);
    throw new Error('No se pudieron cargar los talleres');
  }
};

// Función para obtener un workshop específico por slug
export const fetchWorkshopBySlug = async (slug: string): Promise<Workshop | null> => {
  try {
    const workshops = await fetchWorkshops();
    return workshops.find(workshop => workshop.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching workshop by slug:', error);
    throw new Error('No se pudo cargar el taller');
  }
};

// Función para obtener un workshop específico por ID
export const fetchWorkshopById = async (id: number): Promise<Workshop | null> => {
  try {
    const workshops = await fetchWorkshops();
    return workshops.find(workshop => workshop.id === id) || null;
  } catch (error) {
    console.error('Error fetching workshop by ID:', error);
    throw new Error('No se pudo cargar el taller');
  }
};