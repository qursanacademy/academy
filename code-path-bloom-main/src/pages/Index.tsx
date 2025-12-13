import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, Target, Zap, Code2 } from 'lucide-react';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Index = () => {
  const features = [{
    icon: <Target className="w-6 h-6" />,
    title: 'تسهيل الأمن السيبراني',
    description: 'كل ما تحتاجه لتعلم الأمن السيبراني بطريقة منظمة من الأساس الى المتقدم'
  }, {
    icon: <Code2 className="w-6 h-6" />,
    title: 'دعم مجتمعنا',
    description: 'بهذا ستستفيد من المصادر وتصل لها بكل سهولة بطريقة واضحة ومنظمة وبنفس الوقت تدعم صناع هذا المحتوى ممن اجتهدوا عليه'
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: 'مصادر مجانية',
    description: 'الأمن السيبراني ليس حكرا على احد هدفنا نوصلك للمصادر الفخمة والمتاحة على الانترنت بشكل مجاني'
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
    <MatrixRain />
    <div className="scanline" />
    <Navbar />

    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-muted/30 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <code className="text-sm text-muted-foreground font-mono-en" dir="ltr">
              system.init(<span className="text-primary">"Qursan_Academy"</span>)
            </code>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 animate-fade-in-up" style={{
            animationDelay: '0.1s'
          }}>
            <span className="text-primary glow-green">ابدأ رحلتك</span>
            <br />
            <span className="text-primary glow-green">في </span>
            <span className="text-gradient">الأمن السيبراني</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
            هدفنا تسهيل الأمن السيبراني وتوفير المصادر المتاحة للجميع وأن نكون المكان الجامع الذي يسهل وصولك للمحتوى المتاح ودعم صناع هذا المحتوى مع فائدتك
            <span className="terminal-cursor" />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
            <Link to="/roadmap" className="cyber-btn text-base group">
              <span className="flex items-center gap-2">
                ابدأ التعلم
                <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </span>
            </Link>
            <Link to="/about" className="px-6 py-3 text-muted-foreground hover:text-primary transition-colors text-base">
              ← حول الأكاديمية
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mt-16 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            {[{
              value: '+20',
              label: 'دورة'
            }, {
              value: '+7',
              label: 'أداة'
            }, {
              value: '3',
              label: 'مستويات'
            }].map((stat, index) => <div key={index} className="text-center">


            </div>)}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary glow-green mb-4">
            لماذا أكاديمية القراصنة العرب؟
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            كل ما تحتاجه لبناء مسيرة مهنية في الأمن السيبراني، في مكان واحد.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => <div key={index} className="cyber-card text-center" style={{
            animationDelay: `${index * 0.1}s`
          }}>
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-secondary mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">
            هل انت جاهز <span className="text-secondary glow-purple">لاختراق</span> طريقك نحو السايبر؟
          </h2>
          <p className="text-muted-foreground mb-8">
            كون جزء من مجتمعنا اللي رح يكبر ويصير الالاف من المحاربين في الامن السيبراني باذن الله
          </p>
          <Link to="/roadmap" className="cyber-btn cyber-btn-purple inline-flex items-center gap-2">
            <span>عرض خارطة الطريق الكاملة</span>
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* Ethical Disclaimer Section */}
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          dir="ltr"
          className="bg-green-950/30 border-2 border-primary text-primary p-8 rounded-lg text-center shadow-lg backdrop-blur-sm"
          style={{ lineHeight: '1.8' }}
        >
          <div className="text-3xl font-bold mb-4 glow-green">⚠️ DISCLAIMER ⚠️</div>

          <div className="font-bold text-xl mb-3">
            Educational Purposes Only
          </div>

          <div className="font-normal max-w-3xl mx-auto mb-4 text-base">
            All content, techniques, tools, and resources provided on this platform are strictly for{' '}
            <strong className="glow-green">educational and research purposes</strong>. This material is intended to help
            security professionals, students, and ethical hackers improve their skills and knowledge
            in cybersecurity.
          </div>

          <div className="font-bold mt-6 text-lg underline">
            Legal Notice:
          </div>

          <div className="font-normal max-w-3xl mx-auto mt-3 text-base">
            <strong className="glow-green">DO NOT</strong> use these techniques against systems you do not own or do not
            have <strong className="glow-green">explicit written authorization</strong> to test. Unauthorized access to
            computer systems is illegal and punishable by law in most jurisdictions. Users are
            solely responsible for their actions. The creators and maintainers of this platform
            assume no liability for misuse of this information.
          </div>

          <div className="mt-6 font-bold text-lg">
            🛡️ Always practice ethical hacking and obtain proper authorization! 🛡️
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default Index;