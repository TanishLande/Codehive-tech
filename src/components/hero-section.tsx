"use client"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star,  } from "lucide-react";
import { toast } from "sonner";

export function HeroSection() {
  
    
    const onSubmit = () => {
      // Define the image URL - replace with your actual brochure image URL
      const imageUrl = "/broucher.jpg";
      
      // Create an anchor element
      const link = document.createElement("a");
      
      // Set the download attribute and href
      link.download = "brochure.jpg"; // The filename that will be saved on the user's device
      link.href = imageUrl;
      
      // Append to the document, click it, and then remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show a success toast notification
      toast.success("Brochure downloaded successfully!");
    };

  return (
    <section className="relative sm:mt-8 overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/40 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center space-y-8 text-center min-h-[60vh]">
          {/* Client Rating Section - Professional UI */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <div className="flex -space-x-4">
              <Avatar className="border-2 border-blue-900/50 w-10 h-10 shadow-lg ring-2 ring-black/5">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Sarah Chen" 
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-blue-900/50 w-10 h-10 shadow-lg ring-2 ring-black/5">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Michael Roberts" 
                />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-blue-900/50 w-10 h-10 shadow-lg ring-2 ring-black/5">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Emily Parker" 
                />
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-blue-900/50 w-10 h-10 shadow-lg ring-2 ring-black/5">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="David Kim" 
                />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-blue-900/50 w-10 h-10 shadow-lg ring-2 ring-black/5">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Jessica Taylor" 
                />
                <AvatarFallback>JT</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2 bg-blue-950/80 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-900/30 shadow-md">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-blue-100">50+ satisfied clients</span>
            </div>
          </div>
          
          {/* Heading Section */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Empowering <span className="text-blue-400 drop-shadow-md">Brands</span> <br className="hidden sm:block" />
            with Web, Animation & Marketing
            </h1>
            <p className="max-w-[700px] mx-auto text-blue-100  md:text-xl font-light">
              Strategic design and seamless development that convert visitors into loyal customers, 
              driving growth effortlessly.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-6 shadow-xl shadow-blue-900/30 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              onClick={onSubmit}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}