import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most projects are completed within 2-4 weeks, depending on the complexity and scope. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer transparent, fixed-price packages based on your specific needs. No hidden fees or surprise costs. Contact us for a personalized quote.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer:
        "Yes, we provide comprehensive maintenance plans to keep your website secure, up-to-date, and performing optimally.",
    },
    {
      question: "Can you help with content creation?",
      answer:
        "Our team includes copywriters who can create compelling content that engages your audience and drives conversions.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all our websites are fully responsive and optimized for all devices, from desktops to smartphones.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-black text-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Everything you need to know about our services
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/10 bg-black/50 shadow-md rounded-lg">
                <AccordionTrigger className="text-lg font-semibold px-4 py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 flex justify-center">
          {/* <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
            Book a 15-min call
          </Button> */}
        </div>
      </div>
    </section>
  )
}
