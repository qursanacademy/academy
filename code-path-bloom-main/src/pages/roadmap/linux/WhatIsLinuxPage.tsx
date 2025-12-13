import { Terminal, ExternalLink, Monitor, HardDrive } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const WhatIsLinuxPage = () => {
  const distros = [
    {
      title: 'Kali Linux',
      description: 'Kali Linux هي أشهر توزيعة على الإطلاق في مجال اختبار الاختراق والهندسة العكسية والتحليل الجنائي الرقمي Digital Forensics. تعتمد على Debian وتأتي مجهزة مسبقًا بأكثر من 600 أداة جاهزة تشمل: Nmap – Burp Suite – Metasploit – Wireshark – John – Hydra – وغيرها. تُستخدم في CTFs والعمليات الأمنية وعمليات Red Teaming، وهي معيار عالمي في مجال الأمن السيبراني.',
      link: 'https://www.kali.org/',
      type: 'اختبار الاختراق',
    },
    {
      title: 'Ubuntu',
      description: 'توزيعة سهلة الاستخدام تعتمد عليها الشركات والخوادم. مناسبة للمبتدئين وتتميز بمجتمع كبير ودعم طويل الأمد.',
      link: 'https://ubuntu.com/',
      type: 'للمبتدئين',
    },
    {
      title: 'Debian',
      description: 'توزيعة مستقرة جدًا تُستخدم للخوادم، وهي الأساس الذي تُبنى عليه توزيعات مثل Ubuntu و Kali Linux.',
      link: 'https://www.debian.org/',
      type: 'خوادم',
    },
    {
      title: 'Fedora',
      description: 'توزيعة مدعومة من Red Hat، سريعة التحديث ومناسبة للمطورين. تتميز بأحدث التقنيات والبرمجيات.',
      link: 'https://getfedora.org/',
      type: 'للمطورين',
    },
    {
      title: 'Arch Linux',
      description: 'توزيعة موجهة للمستخدمين المتقدمين، تعتمد على البساطة والتحكم الكامل، مع مستودعات AUR الشهيرة التي توفر آلاف الحزم.',
      link: 'https://archlinux.org/',
      type: 'متقدم',
    },
    {
      title: 'Parrot OS Security',
      description: 'توزيعة أمنية خفيفة تحتوي على أدوات Pentesting و Digital Forensics. بديل ممتاز لـ Kali Linux بموارد أقل.',
      link: 'https://parrotsec.org/',
      type: 'اختبار الاختراق',
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
              <span className="text-primary text-sm font-medium">نظام لينكس</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              ما هو نظام لينكس؟
            </h1>
            <p className="text-muted-foreground text-lg">
              تعرف على نظام التشغيل الأكثر استخدامًا في عالم الأمن السيبراني والخوادم.
            </p>
          </div>
        </div>
      </section>

      {/* What is Linux Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card mb-8">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded bg-primary/10 text-primary">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">ما هو نظام لينكس؟</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">لينكس (Linux)</strong> هو نظام تشغيل مفتوح المصدر (Open Source) تم تطويره عام 1991 بواسطة <strong className="text-primary">لينوس تورفالدز</strong>. 
                  يُعتبر من أكثر أنظمة التشغيل استقرارًا وأمانًا، ويُستخدم في أغلب خوادم الإنترنت حول العالم، بالإضافة إلى الهواتف الذكية (Android مبني على نواة لينكس).
                </p>

                <div className="border-r-4 border-primary/50 pr-4 py-2">
                  <h3 className="text-lg font-semibold text-primary mb-2">ما هو الكيرنل (Kernel)؟</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-secondary">الكيرنل</strong> هو قلب نظام التشغيل، وهو الجزء الذي يتعامل مباشرة مع العتاد (Hardware) مثل المعالج والذاكرة والأقراص. 
                    كيرنل لينكس هو ما يميز جميع توزيعات لينكس عن بعضها، حيث تشترك جميعها في نفس النواة مع اختلاف في الواجهات والأدوات المُضافة.
                  </p>
                </div>

                <div className="border-r-4 border-secondary/50 pr-4 py-2">
                  <h3 className="text-lg font-semibold text-primary mb-2">مفهوم التوزيعات (Distributions)</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-secondary">التوزيعة</strong> هي نسخة معدّلة من نظام لينكس تأتي مع مجموعة من البرامج والأدوات والواجهات الرسومية. 
                    كل توزيعة لها هدف معين: بعضها للمبتدئين (Ubuntu)، وبعضها للخوادم (Debian)، وبعضها للأمن السيبراني (Kali Linux).
                  </p>
                </div>

                <div className="border-r-4 border-primary/50 pr-4 py-2">
                  <h3 className="text-lg font-semibold text-primary mb-2">لماذا لينكس مهم للأمن السيبراني؟</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong className="text-primary">أغلب أدوات الاختراق</strong> مصممة للعمل على لينكس.</li>
                    <li>• <strong className="text-primary">الخوادم</strong>: أكثر من 90% من خوادم الإنترنت تعمل بلينكس.</li>
                    <li>• <strong className="text-primary">التحكم الكامل</strong>: سطر الأوامر يمنحك قوة وتحكم لا مثيل لهما.</li>
                    <li>• <strong className="text-primary">مفتوح المصدر</strong>: يمكنك فهم كيف يعمل النظام بالكامل.</li>
                    <li>• <strong className="text-primary">مجاني</strong>: لا حاجة لدفع تراخيص مثل Windows.</li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Distros Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="أشهر توزيعات لينكس" 
            subtitle="اختر التوزيعة المناسبة لأهدافك ومستواك."
            glowColor="green"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {distros.map((distro, index) => (
              <div 
                key={index} 
                className="cyber-card group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <HardDrive className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                      {distro.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300 font-mono-en">
                    {distro.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {distro.description}
                  </p>
                  
                  <a
                    href={distro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                      الموقع الرسمي
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

export default WhatIsLinuxPage;
