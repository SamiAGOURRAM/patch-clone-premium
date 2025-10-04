import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-foreground text-background py-3 px-4 relative animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="bg-background text-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
            NEW
          </span>
          <p className="text-sm md:text-base">
            New guide to carbon credit procurement featuring leaders from Bain & Company, Docusign, Etsy, and Nokia
          </p>
          <Button 
            variant="link" 
            size="sm"
            className="text-background hover:text-background/80 font-semibold ml-auto hidden md:inline-flex"
          >
            Read it here →
          </Button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="hover:bg-background/10 rounded-full p-1.5 transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
