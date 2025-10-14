import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold tracking-wide">AURORA</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                Nos Univers
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>Espace</DropdownMenuItem>
                <DropdownMenuItem>Expérience</DropdownMenuItem>
                <DropdownMenuItem>Structure</DropdownMenuItem>
                <DropdownMenuItem>Image</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                Méthode AURORA
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>Observer</DropdownMenuItem>
                <DropdownMenuItem>Orienter</DropdownMenuItem>
                <DropdownMenuItem>Structurer</DropdownMenuItem>
                <DropdownMenuItem>Accompagner</DropdownMenuItem>
                <DropdownMenuItem>Préserver</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#network" className="hover:text-primary transition-colors font-medium">
              Réseau
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
                L'Âme
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                <DropdownMenuItem>Manifeste</DropdownMenuItem>
                <DropdownMenuItem>Origines</DropdownMenuItem>
                <DropdownMenuItem>Valeurs</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#magazine" className="hover:text-primary transition-colors font-medium">
              Les Connexions Durables
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button size="lg" className="font-medium">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
