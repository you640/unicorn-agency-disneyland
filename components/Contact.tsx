import React, { useState } from 'react';
import Button from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string; // Changed from 'portfolio' to 'message'
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string; // Changed from 'portfolio' to 'message'
}

const Contact: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' }); // Updated initial state
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validate = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = t('formErrorNameRequired');
    if (!formData.email.trim()) {
      errors.email = t('formErrorEmailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t('formErrorEmailInvalid');
    }
    // 'message' field is now optional, no specific validation needed unless new rules are added.
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Updated type for textarea
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' }); // Clear form after success
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };
  
  const inputStyles = `
    w-full bg-[var(--c-surface-1)] text-[var(--c-near-black)] 
    border-2 border-[var(--c-near-black)] p-3 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:border-[var(--c-gold)] focus:ring-2 focus:ring-[var(--c-gold)]/40
  `;
   
  const errorInputStyles = `
    border-red-500 focus:border-red-500 focus:ring-red-500/40
  `;

  return (
    <section ref={ref} id="casting" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto text-center">
        <h2 id="casting-heading" className="text-3xl md:text-4xl font-bold mb-4">{t('castingHeading')}</h2>
        <p className="max-w-xl mx-auto text-[var(--c-near-black)] opacity-80 mb-8">
            {t('castingDescription')}
        </p>
        
        {submitStatus === 'success' && (
          <div className="max-w-xl mx-auto p-4 mb-6 border-2 border-[var(--c-charcoal)] bg-yellow-50 text-left shadow-[2px_2px_0px_var(--c-near-black)]">
            <p className="font-bold text-[var(--c-charcoal)]">{t('formSuccess')}</p>
          </div>
        )}
        {submitStatus === 'error' && (
           <div className="max-w-xl mx-auto p-4 mb-6 border-2 border-red-500 bg-red-50 text-left">
            <p className="font-bold text-red-700">{t('formError')}</p>
          </div>
        )}

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
            <div>
              <label htmlFor="name" className="block text-lg font-bold mb-2">
                {t('formNameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`${inputStyles} ${formErrors.name ? errorInputStyles : ''}`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {formErrors.name && <p className="text-red-600 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-2">
                {t('formEmailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`${inputStyles} ${formErrors.email ? errorInputStyles : ''}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <p className="text-red-600 mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-bold mb-2"> {/* Changed htmlFor */}
                {t('formMessageLabel')} {/* Changed label */}
              </label>
              <textarea
                id="message" // Changed id
                name="message" // Changed name
                placeholder={t('formMessagePlaceholder')} // Changed placeholder
                className={`${inputStyles} resize-y min-h-[120px] ${formErrors.message ? errorInputStyles : ''}`} // Changed to textarea, added styles
                value={formData.message}
                onChange={handleChange}
                // Removed 'required' attribute
              />
              {formErrors.message && <p className="text-red-600 mt-1">{formErrors.message}</p>} {/* Changed error key */}
            </div>
            <div className="text-center pt-4">
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? t('formButtonSubmitting') : t('formButtonSubmit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;