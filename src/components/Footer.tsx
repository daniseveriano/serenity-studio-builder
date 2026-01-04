import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">
              Juliana Mendes
            </h3>
            <p className="font-body text-background/70 text-sm leading-relaxed">
              Psicóloga Clínica CRP 16/12345<br />
              Especialista em Terapia Cognitivo-Comportamental
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 font-body text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+552733456789" className="hover:text-background transition-colors">
                  (27) 3345-6789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Rua José Alexandre Buaiz, 300 - Sala 1205<br />
                  Enseada do Suá, Vitória - ES
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Horário</h4>
            <ul className="space-y-2 font-body text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Segunda a sexta: 8h às 20h</span>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span>Sábado: 8h às 12h</span>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span>Online em horários flexíveis</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2 font-body text-sm text-background/70">
              <li>
                <a href="#approach" className="hover:text-background transition-colors">
                  Abordagem
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-background transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#about-professional" className="hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-background transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-background/60 text-center md:text-left">
            © {currentYear} Psicóloga Juliana Mendes. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-background/40">
            Atendimento para Vila Velha, Serra, Cariacica, Viana, Guarapari e Fundão
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
