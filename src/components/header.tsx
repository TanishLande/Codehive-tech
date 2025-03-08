"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronDown, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

// Form validation schema - same as in HeroSection
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.string({ message: "Please select a date" }),
  time: z.string({ message: "Please select a time" }),
  message: z.string().optional(),
});

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  // Set up form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      form.setValue("date", selectedDate.toISOString().split('T')[0]);
    }
  };

  const handleTimeSelect = (time: string) => {
    form.setValue("time", time);
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setDate(undefined);
        toast.success("Your appointment has been scheduled successfully!");
        setOpen(false);
      } else {
        toast.error("An error occurred while scheduling your appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Generate time slots from 9 AM to 5 PM
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    const hourFormatted = hour % 12 || 12;
    const ampm = hour < 12 ? "AM" : "PM";
    timeSlots.push(`${hourFormatted}:00 ${ampm}`);
    timeSlots.push(`${hourFormatted}:30 ${ampm}`);
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "md:w-11/18 md:mx-auto md:left-0 md:right-0 md:rounded-xl md:mt-2 backdrop-blur-md bg-black/60 border border-white/20"
          : "backdrop-blur-md bg-black/40 border-b border-white/10"
      }`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? "max-w-full" : "max-w-7xl"}`}>
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="relative h-8 w-8 overflow-hidden rounded-md bg-blue-gradient">
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
                  <span className="font-bold">C</span>
                </div>
              </div> */}
              <span className="font-semibold text-lg">CraftCodeHiveTech</span>
            </Link>
          </div>
          
          {/* Navigation - Centered */}
          <nav className="flex-1 flex justify-center items-center">
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="#work"
                className="text-sm font-medium transition-colors hover:text-blue-400 hover:underline underline-offset-4"
              >
                Work
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium transition-colors hover:text-blue-400 hover:underline underline-offset-4"
              >
                Services
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium transition-colors hover:text-blue-400 hover:underline underline-offset-4"
              >
                Benefits
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium transition-colors hover:text-blue-400 hover:underline underline-offset-4"
              >
                FAQ
              </Link>
            </div>
          </nav>
          
          {/* Button Section */}
          <div className="flex items-center">
            <Button 
              className="rounded-full gradient-button px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium hover:border-blue-600 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Book a call
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Dialog - Same as in HeroSection */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto lg:overflow-visible bg-white dark:bg-gray-950 border border-blue-100/20 shadow-xl">
          <DialogHeader className="bg-white dark:bg-gray-950 pt-6 pb-2 z-10 border-b border-gray-100 dark:border-gray-800">
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Schedule a 15-minute call</DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Choose a date and time that works for you, and we will be in touch.
            </DialogDescription>
          </DialogHeader>
          
          <div className="overflow-y-auto px-1 py-4 sm:py-6 scrollbar-hide">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="focus-visible:ring-blue-500 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="focus-visible:ring-blue-500 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+1 (555) 000-0000" 
                            className="focus-visible:ring-blue-500 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  {/* Date Picker */}
                  <div>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 mt-1 h-10"
                        >
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span className="text-gray-500 dark:text-gray-400">Select a date</span>
                            )}
                          </div>
                          <ChevronDown className="ml-auto h-4 w-4 text-gray-500 dark:text-gray-400" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border-blue-100 dark:border-blue-900 shadow-md" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          disabled={(date) => 
                            date < new Date() || 
                            date.getDay() === 0 || 
                            date.getDay() === 6
                          }
                          className="bg-white dark:bg-gray-900 rounded-md border-blue-100 dark:border-blue-900"
                          classNames={{
                            day_selected: "bg-blue-600 text-white hover:bg-blue-700",
                            day_today: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    {form.formState.errors.date && (
                      <p className="text-xs text-red-500 mt-1">{form.formState.errors.date.message}</p>
                    )}
                  </div>
                  
                  {/* Time Select */}
                  <div>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Time</FormLabel>
                    <Select
                      onValueChange={handleTimeSelect}
                      value={form.watch("time")}
                    >
                      <SelectTrigger className="mt-1 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus-visible:ring-blue-500 h-10">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-900">
                        <div className="max-h-60 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <SelectItem 
                              key={time} 
                              value={time}
                              className="hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:bg-blue-50 dark:focus:bg-blue-900/30"
                            >
                              <div className="flex items-center">
                                {form.watch("time") === time && (
                                  <Check className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                                )}
                                <span>{time}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.time && (
                      <p className="text-xs text-red-500 mt-1">{form.formState.errors.time.message}</p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Let us know what you'd like to discuss..." 
                            className="min-h-24 resize-y focus-visible:ring-blue-500 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <DialogFooter className="pt-4 sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-md hover:shadow-lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        <span>Scheduling...</span>
                      </div>
                    ) : (
                      "Schedule Call"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}