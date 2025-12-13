import { Terminal, BookOpen, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const LinuxPage = () => {
  const sections = [
    {
      title: 'الدورات',
      description: 'دورات شاملة لتعلم نظام لينكس من الصفر حتى الاحتراف.',
      link: '/roadmap/linux/courses',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'مواقع لتعلم لينكس',
      description: 'مواقع تفاعلية وتحديات عملية لإتقان أوامر لينكس.',
      link: '/roadmap/linux/websites',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'ما هو نظام لينكس؟',
      description: 'تعرف على نظام لينكس، الكيرنل، التوزيعات، وأهميته في الأمن السيبراني.',
      link: '/roadmap/linux/what-is-linux',
      icon: <HelpCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">المستوى المبتدئ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              نظام لينكس
            </h1>
            <p className="text-muted-foreground text-lg">
              إتقان نظام لينكس أمر أساسي في عالم الأمن السيبراني. تعلم سطر الأوامر، إدارة الملفات، والصلاحيات.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="أقسام التعلم" 
            subtitle="اختر القسم المناسب لبدء رحلتك في تعلم نظام لينكس."
            glowColor="green"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <Link 
                key={index}
                to={section.link}
                className="cyber-card group opacity-0 animate-fade-in-up block"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {section.icon}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      قسم
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                    {section.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {section.description}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <span className="border-b border-primary/50 group-hover:border-primary transition-colors">
                      الدخول للقسم
                    </span>
                  </span>
                </div>
                
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinuxPage;
