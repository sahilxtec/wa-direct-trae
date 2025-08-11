'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const WhatsAppForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove any non-digit characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${cleanedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg p-6 border dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Phone Number (with country code)
          </label>
          <PhoneInput
            country="in"
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
            inputClass="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            buttonClass="border border-gray-300 dark:border-gray-600 rounded-l-md dark:bg-gray-700"
            enableSearch={true}
            searchPlaceholder="Search countries..."
            containerClass="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Message (optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24 dark:bg-gray-700 dark:text-white"
            placeholder="Type your message here..."
            style={{ color: 'inherit' }}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Open in WhatsApp
        </button>
      </form>
      
      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
        No login or registration needed. You need an active WhatsApp account.
        This website does not use cookies and is privacy friendly.
      </p>
    </div>
  );
};

export default WhatsAppForm;