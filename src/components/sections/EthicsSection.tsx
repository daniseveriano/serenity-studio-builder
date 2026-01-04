import { Shield, Lock, FileCheck, Eye } from "lucide-react";

const EthicsSection = () => {
  const features = [
    {
      icon: Lock,
      title: "Sigilo Absoluto",
      description: "Tudo o que você compartilha é protegido pelo Código de Ética",
    },
    {
      icon: Shield,
      title: "Plataforma Segura",
      description: "Atendimento online com criptografia de ponta a ponta",
    },
    {
      icon: FileCheck,
      title: "LGPD",
      description: "Em conformidade com a Lei Geral de Proteção de Dados",
    },
    {
      icon: Eye,
      title: "Sem Julgamentos",
      description: "Espaço seguro para você se expressar livremente",
    },
  ];

  return (
    <section id="ethics-and-privacy" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ética e Sigilo Profissional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-8">
            <div className="font-body text-muted-foreground leading-relaxed space-y-4">
              <p>
                O sigilo é um dos pilares fundamentais da relação terapêutica. Tudo o que você compartilha nas sessões é absolutamente confidencial e protegido pelo Código de Ética Profissional do Psicólogo.
              </p>
              <p>
                Meu compromisso é oferecer um espaço seguro, livre de julgamentos, onde você possa se expressar com total liberdade. As informações compartilhadas durante o processo terapêutico jamais serão divulgadas a terceiros sem sua autorização expressa.
              </p>
              <p>
                No atendimento online, utilizo plataformas seguras e criptografadas, garantindo a mesma privacidade e proteção de dados do atendimento presencial.
              </p>
              <p>
                Atuo em conformidade com as diretrizes do Conselho Federal de Psicologia (CFP) e da Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-xl p-6 text-center group hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
