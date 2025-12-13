import { Link } from 'react-router-dom';
import { 
  Radar, Globe, Network, Search, Cpu, HardDrive, Eye, Wifi, Key, Shield, ChevronLeft
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const ToolsLibrary = () => {
  const categories = [
    {
      name: 'أدوات اختبار اختراق الشبكات',
      description: 'أدوات فحص واختبار أمان الشبكات والمنافذ والخدمات.',
      path: '/tools/network-pentest',
      icon: <Radar className="w-8 h-8" />,
      count: 8,
    },
    {
      name: 'أدوات اختبار اختراق الويب',
      description: 'أدوات اختبار أمان تطبيقات الويب واكتشاف الثغرات.',
      path: '/tools/web-pentest',
      icon: <Globe className="w-8 h-8" />,
      count: 10,
    },
    {
      name: 'أدوات تحليل الشبكات',
      description: 'أدوات التقاط وتحليل حزم البيانات وحركة الشبكة.',
      path: '/tools/network-analysis',
      icon: <Network className="w-8 h-8" />,
      count: 6,
    },
    {
      name: 'أدوات جمع المعلومات',
      description: 'أدوات الاستطلاع وجمع المعلومات عن الأهداف.',
      path: '/tools/recon',
      icon: <Search className="w-8 h-8" />,
      count: 8,
    },
    {
      name: 'أدوات الهندسة العكسية',
      description: 'أدوات تحليل البرامج والملفات التنفيذية.',
      path: '/tools/reverse-engineering',
      icon: <Cpu className="w-8 h-8" />,
      count: 6,
    },
    {
      name: 'أدوات الـ Forensics',
      description: 'أدوات التحقيق الجنائي الرقمي وتحليل الأدلة.',
      path: '/tools/forensics',
      icon: <HardDrive className="w-8 h-8" />,
      count: 6,
    },
    {
      name: 'أدوات الـ OSINT',
      description: 'أدوات جمع المعلومات من المصادر المفتوحة.',
      path: '/tools/osint',
      icon: <Eye className="w-8 h-8" />,
      count: 8,
    },
    {
      name: 'أدوات الـ Wireless',
      description: 'أدوات اختبار أمان الشبكات اللاسلكية.',
      path: '/tools/wireless',
      icon: <Wifi className="w-8 h-8" />,
      count: 6,
    },
    {
      name: 'أدوات الـ Password Attacks',
      description: 'أدوات كسر وتخمين كلمات المرور.',
      path: '/tools/password-attacks',
      icon: <Key className="w-8 h-8" />,
      count: 6,
    },
    {
      name: 'أدوات إدارة الثغرات',
      description: 'أدوات فحص واكتشاف الثغرات الأمنية.',
      path: '/tools/vulnerability-scanners',
      icon: <Shield className="w-8 h-8" />,
      count: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              مكتبة الأدوات
            </h1>
            <p className="text-muted-foreground text-lg">
              مكتبة شاملة لأهم أدوات الأمن السيبراني واختبار الاختراق مع شرح الأوامر الأساسية.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="أقسام الأدوات" 
            subtitle="اختر القسم الذي تريد استكشافه وتعلم أدواته."
            glowColor="purple"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={category.path}
                className="cyber-card group cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {category.icon}
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {category.count} أدوات
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:glow-green transition-all">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                    <span>استكشف الأدوات</span>
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsLibrary;