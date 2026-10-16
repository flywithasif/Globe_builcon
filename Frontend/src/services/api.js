import axios from 'axios';
import { siteConfig } from '../data/siteConfig';

const api = axios.create({
  baseURL: siteConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  submitContactForm: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Contact form submitted successfully (Demo Mode).",
          data: formData
        });
      }, 800);
    });
  },
  submitQuoteForm: async (quoteData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Quote request submitted successfully (Demo Mode).",
          data: quoteData
        });
      }, 800);
    });
  }
};

export default api;