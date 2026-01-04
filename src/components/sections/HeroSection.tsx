import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-body text-foreground">
              4.9 estrelas • 127 avaliações no Google
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Psicóloga em Vitória ES: Dra. Juliana Mendes — Cuidado e acolhimento para sua saúde mental
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 animate-fade-up delay-200 max-w-2xl">
            Psicoterapia individual com abordagem humanizada. Atendimento presencial na Enseada do Suá e online para todo o Brasil.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8 animate-fade-up delay-300">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-body">Enseada do Suá, Vitória - ES</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5527999887766" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#about-professional">
                Conheça a Psicóloga
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fade-up delay-500">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <p className="font-display text-2xl font-semibold text-primary">10+</p>
              <p className="text-sm text-muted-foreground font-body">Anos de experiência</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <p className="font-display text-2xl font-semibold text-primary">TCC</p>
              <p className="text-sm text-muted-foreground font-body">Terapia Cognitivo-Comportamental</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <p className="font-display text-2xl font-semibold text-primary">Online</p>
              <p className="text-sm text-muted-foreground font-body">Atendimento disponível</p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <p className="font-display text-2xl font-semibold text-primary">CRP</p>
              <p className="text-sm text-muted-foreground font-body">16/12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
