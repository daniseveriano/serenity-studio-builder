import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo dura cada sessão de terapia?",
    answer:
      "Cada sessão tem duração de 50 minutos, tempo padrão recomendado para um trabalho terapêutico efetivo.",
  },
  {
    question: "Qual a frequência ideal das sessões?",
    answer:
      "Geralmente, iniciamos com sessões semanais. Com o tempo e de acordo com sua evolução, podemos ajustar para quinzenal ou conforme sua necessidade.",
  },
  {
    question: "Como funciona o atendimento online?",
    answer:
      "O atendimento online é realizado por videochamada, em plataforma segura e criptografada. Você recebe o link antes da sessão e pode fazer a terapia de qualquer lugar com internet estável.",
  },
  {
    question: "A terapia é indicada para qualquer pessoa?",
    answer:
      "Sim! A terapia é indicada para qualquer pessoa que deseje cuidar da saúde mental, seja para tratar questões específicas como ansiedade e depressão, ou para autoconhecimento e desenvolvimento pessoal.",
  },
  {
    question: "Os convênios cobrem psicoterapia?",
    answer:
      "Alguns planos de saúde oferecem reembolso para consultas psicológicas. Forneço recibo para que você possa solicitar o reembolso junto ao seu convênio.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar pelo WhatsApp, pelo telefone ou pelo formulário de contato do site. Responderei o mais breve possível para encontrarmos o melhor horário.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl shadow-soft border-none px-6 data-[state=open]:shadow-card transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
