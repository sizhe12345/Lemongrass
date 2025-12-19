import React, { useState, FormEvent } from 'react';
import { Calendar, User, Phone, Clock, Users, FileText, CheckCircle, Send } from 'lucide-react';
import { CONTACT_INFO, PRICE_LIST } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    pax: '1',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const message = `
*New Booking Request*
------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Time:* ${formData.time}
*Pax:* ${formData.pax}
*Service:* ${formData.service}

*Notes:* ${formData.notes || 'None'}
    `.trim();

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // Flatten the price list for the select dropdown
  const serviceOptions = PRICE_LIST.flatMap(category => 
    category.items.map(item => ({
      label: `${item.name} (${item.duration}) - ${item.price}`,
      value: `${item.name} (${item.duration})`
    }))
  );

  return (
    <div className="pt-24 pb-20 bg-wood-light min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-lemongrass-dark mb-6">Reserve Your Sanctuary</h1>
          <p className="text-gray-600">
            Complete the form below to check availability. We will confirm your appointment via WhatsApp immediately.
          </p>
        </div>

        <div className="bg-white shadow-2xl rounded-sm overflow-hidden border-t-4 border-lemongrass-dark">
          <div className="bg-lemongrass-dark p-6 text-white text-center">
            <h3 className="font-bold uppercase tracking-widest text-sm">Online Reservation</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gold w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gold w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="+60 12-345 6789"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gold w-5 h-5" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gold w-5 h-5" />
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Pax</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 text-gold w-5 h-5" />
                  <select
                    name="pax"
                    value={formData.pax}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} Pax</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Preferred Service</label>
              <div className="relative">
                <CheckCircle className="absolute left-3 top-3 text-gold w-5 h-5" />
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                >
                  <option value="" disabled>Select a treatment...</option>
                  {serviceOptions.map((opt, idx) => (
                    <option key={idx} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Special Requests</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 text-gold w-5 h-5" />
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  placeholder="E.g., Preference for female therapist, strong pressure, etc."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-lemongrass-dark font-bold text-lg uppercase tracking-widest py-4 rounded-sm shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-3" />
              Submit via WhatsApp
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              By submitting this form, you will be redirected to WhatsApp to send your booking details directly to our reception.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;