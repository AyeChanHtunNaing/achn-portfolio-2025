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
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(209,250,229,0.12),_transparent_38%)]"></div>
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`mb-14 mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-accent-soft mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
            Contact
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Let&apos;s build software together</h2>
          <p className="mt-4 text-slate-600">
            Reach out for software engineering opportunities, collaborations, or product development discussions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className={`lg:col-span-5 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-panel h-full rounded-2xl p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Software engineering inquiry</h3>
              <p className="mb-8 text-sm leading-6 text-slate-600">
                Feel free to reach out if you have any questions or just want to say hello. 
                I'm always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-4">
                <div className="glass-panel flex items-start gap-4 rounded-xl p-4 transition hover:bg-white/70">
                  <div className="rounded-xl bg-white/70 p-3 text-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-slate-900">Location</h4>
                    <p className="text-sm text-slate-600">Remote</p>
                  </div>
                </div>
                
                <div className="glass-panel flex items-start gap-4 rounded-xl p-4 transition hover:bg-white/70">
                  <div className="rounded-xl bg-white/70 p-3 text-slate-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-slate-900">Email</h4>
                    <p className="text-sm text-slate-600">achn@peacechan.dev</p>
                  </div>
                </div>
                
                <div className="glass-panel flex items-start gap-4 rounded-xl p-4 transition hover:bg-white/70">
                  <div className="rounded-xl bg-white/70 p-3 text-slate-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-slate-900">Phone</h4>
                    <p className="text-sm text-slate-600">+65 94219072</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-7 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-panel-strong relative rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
                    <Input 
                      id="name"
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input h-11 rounded-xl border-white/80 focus-visible:ring-sky-200"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Your Email</label>
                    <Input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input h-11 rounded-xl border-white/80 focus-visible:ring-sky-200"
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                  <Input 
                    id="subject"
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-input h-11 rounded-xl border-white/80 focus-visible:ring-sky-200"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Your Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input min-h-[150px] rounded-xl border-white/80 focus-visible:ring-sky-200"
                    required 
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="glass-accent inline-flex h-11 items-center gap-2 rounded-xl px-5 text-slate-900 hover:brightness-[1.02]"
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
