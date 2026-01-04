import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-hover text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Dê o Primeiro Passo para o Seu Bem-Estar
          </h2>

          {/* Text */}
          <div className="font-body text-muted-foreground leading-relaxed space-y-4 mb-8 max-w-2xl mx-auto">
            <p>
              Cuidar da saúde mental é um ato de amor próprio. Se você está buscando apoio profissional para lidar com ansiedade, depressão ou qualquer desafio emocional, estou aqui para ajudar.
            </p>
            <p>
              Agende sua primeira consulta e vamos juntos construir um caminho de mais equilíbrio, autoconhecimento e qualidade de vida.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/5527999887766"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a
                href="https://maps.google.com/?cid=1234567890123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver localização no Google Maps
              </a>
            </Button>
          </div>

          {/* Payment Info */}
          <p className="text-sm text-muted-foreground font-body mt-8">
            Dinheiro, PIX, Cartão de Crédito, Cartão de Débito • Parcelo em até 3x sem juros
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
