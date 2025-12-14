import { createContext, useContext, useState, ReactNode } from 'react';
import { ContactModal } from './ContactModal';

interface ContactModalContextType {
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactModalProvider');
  }
  return context;
};

interface ContactModalProviderProps {
  children: ReactNode;
}

export const ContactModalProvider = ({ children }: ContactModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
};
