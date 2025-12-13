import { Eye, Search, Globe, Users, Mail, MapPin, Camera, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const OsintTools = () => {
  const tools = [
    {
      name: 'Maltego',
      description: 'أداة تحليل العلاقات والروابط بين البيانات.',
      commands: [
        'تحليل الشبكات الاجتماعية',
        'ربط البيانات تلقائياً',
        'استخراج العلاقات',
        'تصور البيانات',
      ],
      website: 'https://www.maltego.com/',
      icon: <Eye className="w-6 h-6" />,
    },
    {
      name: 'SpiderFoot',
      description: 'أداة OSINT آلية شاملة.',
      commands: [
        'spiderfoot -l 127.0.0.1:5001',
        'فحص تلقائي للنطاقات',
        'جمع معلومات من 100+ مصدر',
        'تقارير مفصلة',
      ],
      website: 'https://www.spiderfoot.net/',
      icon: <Search className="w-6 h-6" />,
    },
    {
      name: 'Sherlock',
      description: 'البحث عن أسماء المستخدمين عبر المنصات.',
      commands: [
        'sherlock username',
        'sherlock user1 user2 user3',
        'sherlock -o results.txt username',
      ],
      website: 'https://github.com/sherlock-project/sherlock',
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: 'Holehe',
      description: 'التحقق من البريد الإلكتروني عبر المنصات.',
      commands: [
        'holehe email@example.com',
        'التحقق من 120+ موقع',
        'اكتشاف الحسابات المرتبطة',
      ],
      website: 'https://github.com/megadose/holehe',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: 'GHunt',
      description: 'أداة OSINT لحسابات Google.',
      commands: [
        'ghunt email email@gmail.com',
        'ghunt doc URL',
        'استخراج معلومات من Gmail',
      ],
      website: 'https://github.com/mxrch/GHunt',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      name: 'ExifTool',
      description: 'استخراج البيانات الوصفية من الملفات.',
      commands: [
        'exiftool image.jpg',
        'exiftool -gps:all image.jpg',
        'exiftool -all= image.jpg',
      ],
      website: 'https://exiftool.org/',
      icon: <Camera className="w-6 h-6" />,
    },
    {
      name: 'Creepy',
      description: 'تتبع المواقع الجغرافية من الصور.',
      commands: [
        'تحليل الصور',
        'استخراج إحداثيات GPS',
        'عرض على الخريطة',
      ],
      website: 'https://www.geocreepy.com/',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      name: 'FOCA',
      description: 'استخراج البيانات الوصفية من المستندات.',
      commands: [
        'تحليل PDF, DOC, XLS',
        'اكتشاف المستخدمين',
        'معلومات الخوادم',
        'البيانات المخفية',
      ],
      website: 'https://github.com/ElevenPaths/FOCA',
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
              أدوات الـ OSINT
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات جمع المعلومات من المصادر المفتوحة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية لجمع المعلومات من المصادر المفتوحة."
            glowColor="green"
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ToolDetailCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OsintTools;