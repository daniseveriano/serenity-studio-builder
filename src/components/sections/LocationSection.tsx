import { MapPin, Clock, Car, Bus, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Consultório em Vitória - Enseada do Suá
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.4!2d-40.28!3d-20.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiUyA0MMKwMTYnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Psicóloga Juliana Mendes em Vitória ES"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="font-body text-muted-foreground leading-relaxed space-y-4">
                <p>
                  O consultório está localizado no Edifício Trade Center, no coração da Enseada do Suá, uma das regiões mais acessíveis de Vitória. O espaço foi projetado para proporcionar conforto, tranquilidade e privacidade durante suas sessões.
                </p>
                <p>
                  O prédio conta com estacionamento rotativo e está próximo a pontos de ônibus e do Terminal de Laranjeiras. Se você vem de Vila Velha, Serra ou Cariacica, o acesso é fácil pela Terceira Ponte ou pela BR-101.
                </p>
                <p>
                  Para quem prefere atendimento online, ofereço sessões por videochamada com a mesma qualidade e dedicação do atendimento presencial.
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Rua José Alexandre Buaiz, 300 - Sala 1205<br />
                      Enseada do Suá, Vitória - ES<br />
                      CEP: 29050-545
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Horário</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Segunda a sexta: 8h às 20h<br />
                      Sábado: 8h às 12h<br />
                      Online em horários flexíveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Estacionamento</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Estacionamento rotativo disponível no prédio
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Atendimento Online</h4>
                    <p className="text-sm text-muted-foreground font-body">
                      Disponível para todo o Brasil via videochamada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a
                href="https://maps.google.com/?cid=1234567890123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
