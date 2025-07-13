import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto URL
      const mailtoUrl = `mailto:achn@peacechan.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail application.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-theme-skyBlue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-theme-lightBlue opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`mb-16 max-w-md text-center mx-auto transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-2 border-b-2 text-theme-skyBlue">
            <span className="text-xs font-medium uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-lightBlue to-theme-blue">Get In Touch</h2>
          <p className="mt-4 text-gray-600">Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className={`lg:col-span-5 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-medium mb-4 border-b pb-2">Let's talk about your project</h3>
              <p className="text-gray-500 mb-8 text-sm">
                Feel free to reach out if you have any questions or just want to say hello. 
                I'm always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-md transition-all duration-300 transform hover:translate-x-2">
                  <div className="p-3 rounded-full bg-gray-100 group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Location</h4>
                    <p className="text-gray-500 text-sm">Remote</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-md transition-all duration-300 transform hover:translate-x-2">
                  <div className="p-3 rounded-full bg-gray-100 group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Email</h4>
                    <p className="text-gray-500 text-sm">achn.peacechan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-md transition-all duration-300 transform hover:translate-x-2">
                  <div className="p-3 rounded-full bg-gray-100 group-hover:bg-theme-purple group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Phone</h4>
                    <p className="text-gray-500 text-sm">+65 94219072</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-7 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-theme-purple opacity-10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-theme-blue opacity-10 rounded-full"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block">Your Name</label>
                    <Input 
                      id="name"
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-200 focus-visible:ring-theme-skyBlue focus-visible:border-theme-skyBlue h-11 transition-all duration-300"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block">Your Email</label>
                    <Input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-200 focus-visible:ring-theme-skyBlue focus-visible:border-theme-skyBlue h-11 transition-all duration-300"
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block">Subject</label>
                  <Input 
                    id="subject"
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-gray-200 focus-visible:ring-theme-skyBlue focus-visible:border-theme-skyBlue h-11 transition-all duration-300"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">Your Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="border-gray-200 focus-visible:ring-theme-skyBlue focus-visible:border-theme-skyBlue min-h-[150px] transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="border border-theme-skyBlue text-theme-skyBlue hover:bg-theme-skyBlue hover:text-white transition-colors px-6 py-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
