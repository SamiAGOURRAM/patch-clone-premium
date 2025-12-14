import { useState } from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useContactInfo } from '@/hooks/useSanity';

// Default contact info
const defaultContactInfo = {
  email: 'contact@aurora-consulting.fr',
  phone: '+33 1 23 45 67 89',
  address: 'Paris, France',
  instagram: '@aurora_consulting',
  twitter: '@aurora_consult',
  linkedin: 'Aurora Consulting',
  calendlyUrl: 'https://cal.com',
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { data: contactData } = useContactInfo();
  
  const contact = {
    email: contactData?.email || defaultContactInfo.email,
    phone: contactData?.phone || defaultContactInfo.phone,
    address: contactData?.address || defaultContactInfo.address,
    instagram: contactData?.instagram || defaultContactInfo.instagram,
    twitter: contactData?.twitter || defaultContactInfo.twitter,
    linkedin: contactData?.linkedin || defaultContactInfo.linkedin,
    calendlyUrl: contactData?.calendlyUrl || defaultContactInfo.calendlyUrl,
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">Nous contacter</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Email */}
          <a 
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">{contact.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Téléphone</p>
              <p className="font-medium text-foreground">{contact.phone}</p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-center gap-4 p-4 rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Adresse</p>
              <p className="font-medium text-foreground">{contact.address}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Suivez-nous</p>
            <div className="flex gap-3">
              {contact.instagram && (
                <a 
                  href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
                >
                  Instagram
                </a>
              )}
              {contact.twitter && (
                <a 
                  href={`https://twitter.com/${contact.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
                >
                  Twitter
                </a>
              )}
              {contact.linkedin && (
                <a 
                  href={`https://linkedin.com/company/${contact.linkedin.toLowerCase().replace(/\s/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 bg-muted/30 border-t border-border">
          <a 
            href={contact.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Planifier un rendez-vous
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Hook for using contact modal
export const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);
  
  return {
    isOpen,
    openContactModal,
    closeContactModal,
    ContactModalComponent: () => <ContactModal isOpen={isOpen} onClose={closeContactModal} />,
  };
};
