import { Cpu, Terminal, Code, FileCode, Bug, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const ReverseEngineeringTools = () => {
  const tools = [
    {
      name: 'Ghidra',
      description: 'أداة هندسة عكسية مجانية من NSA.',
      commands: [
        'تحليل الملفات التنفيذية',
        'Decompiler قوي',
        'دعم معماريات متعددة',
        'سكربتات Python/Java',
      ],
      website: 'https://ghidra-sre.org/',
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      name: 'IDA Pro / IDA Free',
      description: 'المعيار الذهبي في الهندسة العكسية.',
      commands: [
        'Disassembler متقدم',
        'تحليل الرسم البياني',
        'سكربتات Python (IDAPython)',
        'دعم الإضافات',
      ],
      website: 'https://hex-rays.com/ida-free/',
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: 'Radare2',
      description: 'إطار عمل مفتوح المصدر للهندسة العكسية.',
      commands: [
        'r2 binary_file',
        'aaa (تحليل كامل)',
        'pdf (طباعة الدالة)',
        'V (الوضع المرئي)',
      ],
      website: 'https://rada.re/',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'Binary Ninja',
      description: 'منصة تحليل ثنائي حديثة.',
      commands: [
        'واجهة مستخدم حديثة',
        'تحليل آلي متقدم',
        'سكربتات Python',
        'دعم الإضافات',
      ],
      website: 'https://binary.ninja/',
      icon: <FileCode className="w-6 h-6" />,
    },
    {
      name: 'x64dbg',
      description: 'مصحح أخطاء مفتوح المصدر لـ Windows.',
      commands: [
        'تصحيح أخطاء x86/x64',
        'تحليل ديناميكي',
        'نقاط توقف متقدمة',
        'تتبع البرامج',
      ],
      website: 'https://x64dbg.com/',
      icon: <Bug className="w-6 h-6" />,
    },
    {
      name: 'OllyDbg',
      description: 'مصحح أخطاء كلاسيكي لبرامج Windows 32-bit.',
      commands: [
        'تصحيح أخطاء x86',
        'تحليل الكود',
        'تعديل الذاكرة',
        'تتبع الاستدعاءات',
      ],
      website: 'http://www.ollydbg.de/',
      icon: <Search className="w-6 h-6" />,
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
              أدوات الهندسة العكسية
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات تحليل البرامج والملفات التنفيذية.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية للهندسة العكسية وتحليل البرامج."
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

export default ReverseEngineeringTools;