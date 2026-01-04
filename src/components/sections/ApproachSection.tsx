import { Brain, Heart, Users, Sparkles } from "lucide-react";

const ApproachSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Base Científica",
      description: "Terapia Cognitivo-Comportamental comprovada cientificamente",
    },
    {
      icon: Heart,
      title: "Espaço Seguro",
      description: "Ambiente acolhedor e livre de julgamentos",
    },
    {
      icon: Users,
      title: "Processo Colaborativo",
      description: "Trabalhamos juntos no seu desenvolvimento",
    },
    {
      icon: Sparkles,
      title: "Atendimento Online",
      description: "Mesma qualidade, de onde você estiver",
    },
  ];

  return (
    <section id="approach" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Minha Abordagem Terapêutica
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p>
              Trabalho com a Terapia Cognitivo-Comportamental (TCC), uma abordagem cientificamente comprovada que ajuda a identificar e modificar padrões de pensamento e comportamento que causam sofrimento.
            </p>
            <p>
              Meu objetivo é criar um espaço seguro e acolhedor onde você possa se expressar livremente, sem julgamentos. Acredito que cada pessoa é única e, por isso, o tratamento é sempre personalizado às suas necessidades e ao seu ritmo.
            </p>
            <p>
              A terapia é um processo colaborativo. Juntos, vamos trabalhar para que você desenvolva ferramentas práticas para lidar com os desafios do dia a dia, promovendo autoconhecimento e bem-estar emocional.
            </p>
            <p>
              Também ofereço atendimento online, com a mesma qualidade e ética do atendimento presencial, para quem prefere a comodidade de fazer terapia de casa ou não mora em Vitória.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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

export default ApproachSection;
