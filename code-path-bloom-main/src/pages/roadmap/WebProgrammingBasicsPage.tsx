import { Code, ExternalLink, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const WebProgrammingBasicsPage = () => {
  const resources = [
    {
      title: 'دورة JavaScript - المهندس أسامة الزيرو',
      description: 'دورة أساسيات JavaScript لبناء صفحات الويب - الخطوة الأولى في فهم بنية المواقع.',
      link: 'https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      icon: <Youtube className="w-6 h-6" />,
      type: 'سلسلة يوتيوب',
    },
    {
      title: 'دورة HTML - المهندس أسامة الزيرو',
      description: 'دورة أساسيات HTML للتفاعل مع صفحات الويب وفهم البرمجة النصية.',
      link: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji',
      icon: <Youtube className="w-6 h-6" />,
      type: 'سلسلة يوتيوب',
    },
    {
      title: 'دورة PHP - المهندس أسامة الزيرو',
      description: 'دورة أساسيات PHP لبرمجة الخوادم وفهم الجانب الخلفي للمواقع.',
      link: 'https://www.youtube.com/watch?v=xcg9qq6SZ0w&list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq',
      icon: <Youtube className="w-6 h-6" />,
      type: 'سلسلة يوتيوب',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 mb-6">
              <Code className="w-5 h-5 text-neon-blue" />
              <span className="text-neon-blue text-sm font-medium">المستوى المتوسط</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              أساسيات البرمجة لاختبار اختراق الويب
            </h1>
            <p className="text-muted-foreground text-lg">
              تعلم أساسيات HTML و PHP و JavaScript الضرورية لفهم تطبيقات الويب واختبار اختراقها.
            </p>
            <p className="text-secondary/80 text-sm mt-4 bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-3">
              ملاحظة: ليس عليك أن تدرسهم دفعة واحدة، يمكنك تقوية المنطق البرمجي وهيكلة المواقع بالتوازي مع التطبيق العملي.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="مصادر التعلم"
            subtitle="دورات عربية لتعلم أساسيات تطوير الويب."
            glowColor="green"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="cyber-card group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {resource.icon}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                    {resource.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {resource.description}
                  </p>

                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                      مشاهدة الدورة
                    </span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebProgrammingBasicsPage;
