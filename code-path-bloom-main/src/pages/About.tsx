import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Heart, Users, ExternalLink, Instagram, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const launchDate = new Date('2025-12-09');
      const now = new Date();

      let years = now.getFullYear() - launchDate.getFullYear();
      let months = now.getMonth() - launchDate.getMonth();
      let days = now.getDate() - launchDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeElapsed({ years, months, days });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000 * 60 * 60); // Update hourly

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-background relative overflow-hidden" dir="rtl">
      <MatrixRain />
      <div className="scanline" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span className="text-primary">حول الأكاديمية</span>
          </div>

          <div className="text-center mb-12">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-4">
              حول أكاديمية القراصنة العرب
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              منصة عربية متخصصة في تعليم الأمن السيبراني واختبار الاختراق الأخلاقي
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* About Section */}
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">قصة الأكاديمية</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  تم إطلاق هذه الأكاديمية بتوفيق من الله ومجهود متواضع مني أنا الطالب أيهم العزام بعد أن واجهت مشاكل كطالب في إيجاد مصادر متاحة لتعلم الأمن السيبراني لتكون مرجعاً لي ولكل طالب يريد البدء في هذا المجال بعيداً عن التشتت.
                </p>
                <p className="text-lg">
                  وكم تسرني مشاركتك لي رأيك واقتراحاتك لتحسين هذا المرجع وليكون أول مرجع عربي لطلاب الأمن السيبراني.
                </p>

                {/* Time Counter */}
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    {timeElapsed.years > 0 && (
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary font-mono-en">{timeElapsed.years}</div>
                        <div className="text-sm text-muted-foreground mt-1">سنة</div>
                      </div>
                    )}
                    {(timeElapsed.months > 0 || timeElapsed.years > 0) && (
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary font-mono-en">{timeElapsed.months}</div>
                        <div className="text-sm text-muted-foreground mt-1">شهر</div>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary font-mono-en">{timeElapsed.days}</div>
                      <div className="text-sm text-muted-foreground mt-1">يوم</div>
                    </div>
                  </div>
                  <p className="text-center text-secondary font-bold text-lg mt-4">من العطاء</p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-secondary">رسالتنا</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  هذه المنصة تهتم بتوفير المصادر المتاحة على الإنترنت، وخاصة العربية، لتعلم الأمن السيبراني واختبار الاختراق الأخلاقي.
                </p>
                <p>
                  في مكان واحد بعيداً عن التشتت، تجد أفضل المصادر العربية لتعلم الأمن السيبراني على يد نخبة المهندسين والأساتذة العرب.
                </p>
                <p className="text-primary font-bold text-lg">
                  نؤمن بأن لدينا عقولاً وكفاءات جبارة في عالمنا العربي.
                </p>
              </div>
            </div>

            {/* Rights Section */}
            <div className="cyber-card border-secondary/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">حقوق الملكية</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  جميع الحقوق والملكيات محفوظة لأصحابها الأصليين.
                </p>
                <p>
                  يتم توجيهك مباشرة للموقع أو المنصة الأصلية للمحتوى.
                </p>
                <p className="text-secondary font-bold">
                  ما نحن إلا جسر يمهد لك طريق الوصول لهذه المصادر المتاحة على الإنترنت.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="cyber-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-primary">تواصل معنا</h2>
                <p className="text-muted-foreground">
                  وأخيراً أنا بشر أصيب وأخطئ، إذا كان هناك أي خطأ أو التباس تواصل معي لإصلاحه فوراً.
                </p>
                <p className="text-muted-foreground">
                  ساهم في تطوير هذه الأكاديمية بتزويدنا بمصادر عن الكورسات المجانية على الإنترنت.
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <a
                    href="https://www.instagram.com/azzam.sec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative z-10"
                    style={{ cursor: 'pointer' }}
                  >
                    <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-primary font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@azzamsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg border border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 group cursor-pointer relative z-10"
                    style={{ cursor: 'pointer' }}
                  >
                    <Youtube className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" />
                    <span className="text-secondary font-medium">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
