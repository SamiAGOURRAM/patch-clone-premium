import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-foreground text-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Connectons-nous
          </h2>
          <p className="text-xl text-background/80 max-w-3xl mx-auto">
            Un projet ? Une question ? N'hésitez pas à nous contacter. 
            Nous sommes là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@aurora-conseil.fr"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-background/70">Email</p>
                    <p className="font-semibold">contact@aurora-conseil.fr</p>
                  </div>
                </a>

                <a
                  href="tel:+33612345678"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-background/70">Téléphone</p>
                    <p className="font-semibold">+33 6 12 34 56 78</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/33612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-background/70">WhatsApp</p>
                    <p className="font-semibold">Discutons directement</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Suivez-nous</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <span className="font-bold">Li</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <span className="font-bold">Tw</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <span className="font-bold">In</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-background text-foreground hover:bg-background/90 group"
              >
                Envoyer le message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
