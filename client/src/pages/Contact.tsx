import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CONTACT_IMAGE = "https://images.unsplash.com/photo-1423666639041-f142fcb9446d?q=80&w=2074&auto=format&fit=crop";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We will get back to you soon.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        <div className="relative bg-slate-900 py-20">
          <div className="absolute inset-0 overflow-hidden">
             <img 
               src={CONTACT_IMAGE} 
               alt="Contact Background" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display uppercase tracking-wide mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get in touch for quotes, inquiries, or support.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Reach Out</span>
                <h2 className="text-3xl font-bold text-slate-900 font-display mb-6">Head Office & Factory</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We welcome you to visit our facility or contact us through phone or email. 
                  Our team is ready to assist you with your requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=SF.No+399%2F1C+Part%2C+Pothiyampalayam%2C+Naranapuram+Village%2C+Vadugapalayam+Post%2C+Sarcarsamakulam%2C+Coimbatore+641107%2C+Tamil+Nadu%2C+India"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 text-sm leading-relaxed hover:text-primary transition-colors"
                    >
                      SF.No: 399/1C Part, Pothiyampalayam, <br />
                      Naranapuram Village, Vadugapalayam Post, <br />
                      Sarcarsamakulam, Coimbatore - 641 107, <br />
                      Tamil Nadu, INDIA.
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600 text-sm mb-2">Mobile: <a href="tel:+919842201342" className="hover:text-primary transition-colors">+91 98422 01342</a></p>
                    <p className="text-slate-600 text-sm">Office: <a href="tel:+919842199044" className="hover:text-primary transition-colors">+91 98421 99044</a></p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  <Mail className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:bala@aacehitech.co.in" className="text-slate-600 text-sm hover:text-primary transition-colors block mb-1">bala@aacehitech.co.in</a>
                    <a href="mailto:sales@aacehitech.co.in" className="text-slate-600 text-sm hover:text-primary transition-colors block">sales@aacehitech.co.in</a>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
                  <Clock className="w-6 h-6 text-primary mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
                    <p className="text-slate-600 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-slate-100 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="h-12 border-slate-200 focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} className="h-12 border-slate-200 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 00000 00000" {...field} className="h-12 border-slate-200 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            className="min-h-[150px] border-slate-200 focus:border-primary resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-lg rounded-sm"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

