import { Button } from "./ui/button";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-[#0F1C2E]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Button
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-foreground transition-colors"
          >
            See the platform
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight">
              A climate expert takes you inside the platform
            </h2>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-background/80 text-lg leading-relaxed">
              Bee Hui Yeh, our Head of Climate Strategy & Solutions, shows you how Patch can help sustainability leaders meet their biggest carbon market challenges.
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
              alt="Climate expert presentation"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
