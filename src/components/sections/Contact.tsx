import { useState } from 'react';
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
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoUrl = `mailto:achn@peacechan.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      toast({
        title: 'Email client opened',
        description: 'Please send the message from your mail application.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to open your email client. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container pb-8">
      <div className="section-heading-row">
        <span className="section-eyebrow">05. Contact</span>
        <div className="section-rule" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-400">
            Reach out for software engineering opportunities, product collaborations, or backend/frontend project work.
          </p>

          <div className="surface-panel p-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-200" />
              <div>
                <p className="text-sm font-medium text-slate-200">Location</p>
                <p className="mt-1 text-sm text-slate-400">Remote</p>
              </div>
            </div>
          </div>

          <div className="surface-panel p-4">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-emerald-200" />
              <div>
                <p className="text-sm font-medium text-slate-200">Email</p>
                <p className="mt-1 break-all text-sm text-slate-400">achn@peacechan.dev</p>
              </div>
            </div>
          </div>

          <div className="surface-panel p-4">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-emerald-200" />
              <div>
                <p className="text-sm font-medium text-slate-200">Phone</p>
                <p className="mt-1 text-sm text-slate-400">+65 94219072</p>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-panel-strong p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-slate-300">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-11 border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-300/30"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11 border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-300/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-slate-300">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-11 border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-300/30"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-slate-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] border-white/10 bg-white/5 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-300/30"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-5 text-emerald-100 hover:bg-emerald-300/15"
            >
              {isSubmitting ? 'Opening...' : 'Send Message'}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
