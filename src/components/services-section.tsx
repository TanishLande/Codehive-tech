import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Web Design",
      description: "Custom, responsive designs that reflect your brand identity and engage your audience.",
    },
    {
      title: "Animation Creation",
      description: "Engaging animations that bring your brand to life and create memorable user experiences.",
    },
    {
      title: "Content Creation",
      description: "Professional content development that tells your story and resonates with your target audience.",
    },
    {
      title: "Email Marketing",
      description: "Strategic email campaigns that nurture leads and drive conversions with personalized messaging.",
    },
    {
      title: "WhatsApp Marketing",
      description: "Direct and effective WhatsApp campaigns to reach customers on their preferred messaging platform.",
    },
  ]
  
  return (
    <section className="py-24 md:py-32 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3 max-w-[700px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Our Services</h2>
            <p className="text-muted-foreground md:text-xl">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
            {services.map((service, i) => (
              <Card
                key={i}
                className="bg-black/50 border-white/10 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle className="h-5 w-5 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}