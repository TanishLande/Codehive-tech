export function BenefitsSection() {
    const benefits = [
      {
        title: "Strategic Approach",
        description: "We don't just build websites; we create digital strategies aligned with your business goals.",
      },
      {
        title: "Conversion Focused",
        description: "Every element of your website is designed to convert visitors into customers.",
      },
      {
        title: "Transparent Process",
        description: "Clear communication and regular updates throughout the entire project.",
      },
      {
        title: "Fast Turnaround",
        description: "Efficient workflows that deliver high-quality websites in weeks, not months.",
      },
      {
        title: "Ongoing Support",
        description: "We're your long-term partner, providing continuous improvements and support.",
      },
      {
        title: "Results Driven",
        description: "We measure success by the growth and ROI we generate for your business.",
      },
    ]
  
    return (
      <section className="bg-black/80 py-24 md:py-32" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mb-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We deliver results that exceed expectations
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="group  relative overflow-hidden rounded-lg border border-white/20 bg-black/10 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-blue-500/10"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-blue-gradient group-hover:w-full transition-all duration-300"></div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  