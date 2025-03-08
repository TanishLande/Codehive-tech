import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

export const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('process')?.offsetTop;
      
      if (elementPosition && scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check position on mount as well
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: "1",
      title: "Consult",
      description: "We'll discuss your goals and vision over a call to ensure we're aligned."
    },
    {
      number: "2",
      title: "Design",
      description: "We'll create a custom design that reflects your brand and meets your needs."
    },
    {
      number: "3",
      title: "Deliver",
      description: "Your website will be delivered, optimized for performance and ready to impress."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 bg-black relative" id="process">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">3-step</span> process.
          </h2>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <motion.div 
                className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
                variants={numberVariants}
              >
                {step.number}
              </motion.div>
              
              <Card className="w-full bg-black/80 backdrop-blur-sm border border-blue-500/10 shadow-lg shadow-blue-500/5 hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300">
                <CardContent className="pt-6 pb-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="w-full flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;