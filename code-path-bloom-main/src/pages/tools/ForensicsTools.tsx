import { HardDrive, FileSearch, Terminal, Database, Image, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const ForensicsTools = () => {
  const tools = [
    {
      name: 'Autopsy',
      description: 'منصة تحقيق جنائي رقمي شاملة.',
      commands: [
        'تحليل الأقراص الصلبة',
        'استرجاع الملفات المحذوفة',
        'تحليل التايم لاين',
        'استخراج البيانات الوصفية',
      ],
      website: 'https://www.autopsy.com/',
      icon: <HardDrive className="w-6 h-6" />,
    },
    {
      name: 'Volatility',
      description: 'أداة تحليل ذاكرة RAM.',
      commands: [
        'vol.py -f memdump.raw imageinfo',
        'vol.py -f memdump.raw --profile=Win10x64 pslist',
        'vol.py -f memdump.raw --profile=Win10x64 netscan',
        'vol.py -f memdump.raw --profile=Win10x64 filescan',
      ],
      website: 'https://www.volatilityfoundation.org/',
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: 'FTK Imager',
      description: 'أداة إنشاء صور جنائية للأقراص.',
      commands: [
        'إنشاء صور E01/DD',
        'استعراض الأدلة',
        'تصدير الملفات',
        'حساب الـ Hash',
      ],
      website: 'https://www.exterro.com/ftk-imager',
      icon: <Image className="w-6 h-6" />,
    },
    {
      name: 'Sleuth Kit',
      description: 'مجموعة أدوات تحليل جنائي للأنظمة.',
      commands: [
        'mmls disk.img',
        'fls -r -o 2048 disk.img',
        'icat -o 2048 disk.img 12345',
        'tsk_recover -o 2048 disk.img output/',
      ],
      website: 'https://www.sleuthkit.org/',
      icon: <FileSearch className="w-6 h-6" />,
    },
    {
      name: 'Foremost',
      description: 'أداة استرجاع الملفات بناءً على التوقيعات.',
      commands: [
        'foremost -i disk.img',
        'foremost -t jpg,png -i disk.img',
        'foremost -i disk.img -o output/',
      ],
      website: 'http://foremost.sourceforge.net/',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'Plaso / Log2Timeline',
      description: 'أداة إنشاء تايم لاين من مصادر متعددة.',
      commands: [
        'log2timeline.py timeline.plaso disk.img',
        'psort.py -o l2tcsv timeline.plaso',
        'pinfo.py timeline.plaso',
      ],
      website: 'https://plaso.readthedocs.io/',
      icon: <Clock className="w-6 h-6" />,
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
              أدوات الـ Forensics
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات التحقيق الجنائي الرقمي وتحليل الأدلة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية للتحقيق الجنائي الرقمي."
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

export default ForensicsTools;