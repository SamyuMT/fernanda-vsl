import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, FileText, CreditCard, CheckCircle, XCircle, Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  paymentReference: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  paymentReference?: string;
}

interface WebhookResponse {
  status: string;
  Pago?: {
    quantity: string;
    title: string;
    unit_price: string;
  };
  codigoTaller?: string;
  totalPagado?: string;
  emailPago?: string;
  identificación?: string;
  nombrePago?: string;
  CorreoActivación?: string | null;
}

const WorkshopEnrollmentPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    paymentReference: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [webhookResponse, setWebhookResponse] = useState<WebhookResponse | null>(null);

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    // Validar email (debe ser Gmail)
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!formData.email.toLowerCase().includes('@gmail.com')) {
      newErrors.email = 'Debe ser una cuenta de Gmail (@gmail.com) para acceder al curso mediante Google Drive';
    } else if (!/^[^\s@]+@gmail\.com$/.test(formData.email.toLowerCase())) {
      newErrors.email = 'Por favor ingresa un email válido de Gmail';
    }

    // Validar teléfono (WhatsApp)
    if (!formData.phone.trim()) {
      newErrors.phone = 'El número de WhatsApp es obligatorio';
    } else if (!/^[\+]?[\d\s\-\(\)]{8,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Por favor ingresa un número de WhatsApp válido';
    }

    // Validar referencia de pago
    if (!formData.paymentReference.trim()) {
      newErrors.paymentReference = 'La referencia de pago es obligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://n8n-n8n.zgfy7o.easypanel.host/webhook-test/comprobar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          paymentReference: formData.paymentReference
        })
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      
      // Guardar toda la respuesta del webhook
      setWebhookResponse(result);
      
      if (result.status === 'approved') {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
      
    } catch (error) {
      console.error('Error al verificar el pago:', error);
      setSubmitStatus('error');
      setWebhookResponse({ status: 'Error de conexión' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', paymentReference: '' });
    setErrors({});
    setSubmitStatus('idle');
    setWebhookResponse(null);
  };

  return (
    <div className="min-h-screen bg-[#f2e9e2] bg-[url('/bg-2.png')] bg-cover bg-center py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#262c52] hover:text-[#1b92d1] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-[#262c52] mb-2">Habilitación de Taller</h1>
            <p className="text-gray-600 text-lg">
              Completa el formulario para habilitar tu acceso al taller
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-green-700 mb-4">¡Pago Aprobado!</h2>
              
              {webhookResponse && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 text-left">
                  <div className="space-y-3">
                    <p className="text-gray-800">
                      <span className="font-semibold">Su pago ha sido aprobado</span> por el valor de{' '}
                      <span className="font-bold text-green-600">${webhookResponse.totalPagado}</span>
                    </p>
                    
                    <p className="text-gray-800">
                      Correo de pago:{' '}
                      <span className="font-medium text-blue-600">{webhookResponse.emailPago}</span>
                    </p>
                    
                    <p className="text-gray-800">
                      A nombre de:{' '}
                      <span className="font-medium">{webhookResponse.nombrePago}</span>
                    </p>
                    
                    <p className="text-gray-800">
                      Por el taller:{' '}
                      <span className="font-medium text-[#1b92d1]">{webhookResponse.codigoTaller}</span>
                    </p>
                    
                    <div className="mt-4 pt-3 border-t border-green-300">
                      <p className="text-gray-700 text-sm">
                        <strong>📧 Le estaremos enviando un correo con el enlace de ingreso a:</strong>
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                        {webhookResponse.CorreoActivación && (
                          <li>{webhookResponse.CorreoActivación}</li>
                        )}
                        <li>{webhookResponse.emailPago}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={resetForm}
                className="bg-[#1b92d1] text-white px-6 py-3 rounded-lg hover:bg-[#1681b8] transition-colors font-medium"
              >
                Realizar otra habilitación
              </button>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-8">
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-red-700 mb-2">Error en la verificación</h2>
              <p className="text-gray-600 mb-4">
                No se pudo verificar tu pago. Por favor revisa la referencia e intenta de nuevo.
              </p>
              {webhookResponse && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Status:</strong> {webhookResponse.status}
                  </p>
                </div>
              )}
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-[#1b92d1] text-white px-6 py-2 rounded-lg hover:bg-[#1681b8] transition-colors"
              >
                Intentar de nuevo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1b92d1] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico (Gmail) *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1b92d1] focus:border-transparent transition-all ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="tu@gmail.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                <p className="text-xs text-blue-600 mt-1">
                  * Debe ser una cuenta de Gmail para poder acceder al curso mediante Google Drive
                </p>
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1b92d1] focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="+57 300 123 4567"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  Número de WhatsApp para comunicarnos contigo
                </p>
              </div>

              {/* Referencia de Pago */}
              <div>
                <label htmlFor="paymentReference" className="block text-sm font-medium text-gray-700 mb-2">
                  Referencia de Pago *
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="paymentReference"
                    name="paymentReference"
                    value={formData.paymentReference}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1b92d1] focus:border-transparent transition-all ${
                      errors.paymentReference ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="REF123456789"
                  />
                </div>
                {errors.paymentReference && <p className="text-red-500 text-sm mt-1">{errors.paymentReference}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  Referencia enviada por Mercado Pago después de realizar tu pago
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1b92d1] to-[#262c52] text-white py-4 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Verificando pago...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      <span>Comprobar Pago</span>
                    </>
                  )}
                </button>
              </div>

              {/* Info Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Nota importante:</strong> Una vez verificado tu pago, recibirás las instrucciones 
                  de acceso al taller en tu correo Gmail. Asegúrate de revisar también tu carpeta de spam.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkshopEnrollmentPage;