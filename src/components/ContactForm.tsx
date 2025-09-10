import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier zou normaal een API call naar de server komen
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form na 3 seconden
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Bedankt voor uw bericht!</h3>
        <p className="text-gray-600">
          Wij nemen zo spoedig mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Vraag een Offerte Aan</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Naam *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Uw volledige naam"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="uw.email@voorbeeld.nl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="06 - 12345678"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Onderwerp *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="">Selecteer onderwerp</option>
            <option value="offerte">Offerte aanvraag</option>
            <option value="reparatie">Dakreparatie</option>
            <option value="onderhoud">Dakonderhoud</option>
            <option value="nieuwbouw">Nieuwbouw project</option>
            <option value="informatie">Algemene informatie</option>
            <option value="anders">Anders</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Bericht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
          placeholder="Beschrijf uw project of vraag in detail..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-800 text-white py-4 px-6 rounded-lg hover:bg-blue-900 transition-colors font-medium flex items-center justify-center space-x-2"
      >
        <span>Verstuur Bericht</span>
        <Send className="h-5 w-5" />
      </button>
      
      <p className="text-sm text-gray-600 mt-4 text-center">
        * Verplichte velden. Wij behandelen uw gegevens vertrouwelijk.
      </p>
    </form>
  );
};

export default ContactForm;