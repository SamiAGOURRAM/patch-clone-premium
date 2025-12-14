import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-[#0F1C2E]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/univers">
            <Button
              className="bg-background text-foreground hover:bg-background/90"
            >
              Découvrir notre univers
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
              Une experte Aurora vous présente notre vision
            </h2>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-background/80 text-lg leading-relaxed">
              Découvrez comment Aurora accompagne les leaders de la transformation durable pour relever leurs plus grands défis et créer un impact positif.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div className="mt-12 relative rounded-3xl overflow-hidden shadow-premium">
          <div className="relative aspect-video bg-gradient-to-br from-background/10 to-background/5">
            {/* Placeholder for video - you can replace this with an actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center group">
                <Play className="w-8 h-8 text-background fill-background ml-1" />
              </button>
            </div>
            
            {/* Background image placeholder */}
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Présentation Aurora"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
