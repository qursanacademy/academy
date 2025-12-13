import { Network, Eye, Terminal, Server, Wifi, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const NetworkAnalysisTools = () => {
  const tools = [
    {
      name: 'Wireshark',
      description: 'أداة قوية لتحليل حزم البيانات والتقاطها.',
      commands: [
        'http.request (فلتر HTTP)',
        'tcp.flags.syn==1 (اتصالات جديدة)',
        'ip.addr == 192.168.1.1',
        'dns (فلتر DNS)',
        'tcp.port == 80',
      ],
      website: 'https://www.wireshark.org/',
      icon: <Eye className="w-6 h-6" />,
    },
    {
      name: 'Tcpdump',
      description: 'أداة سطر أوامر لالتقاط حزم الشبكة.',
      commands: [
        'tcpdump -i eth0',
        'tcpdump -i eth0 port 80',
        'tcpdump -i eth0 host 192.168.1.1',
        'tcpdump -w capture.pcap',
        'tcpdump -r capture.pcap',
      ],
      website: 'https://www.tcpdump.org/',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'Tshark',
      description: 'نسخة سطر الأوامر من Wireshark.',
      commands: [
        'tshark -i eth0',
        'tshark -r file.pcap',
        'tshark -i eth0 -f "port 80"',
        'tshark -Y "http.request"',
      ],
      website: 'https://www.wireshark.org/docs/man-pages/tshark.html',
      icon: <Network className="w-6 h-6" />,
    },
    {
      name: 'NetworkMiner',
      description: 'أداة تحليل جنائي للشبكات واستخراج الملفات.',
      commands: [
        'تحليل ملفات PCAP',
        'استخراج الصور والملفات',
        'اكتشاف أنظمة التشغيل',
        'تتبع الجلسات',
      ],
      website: 'https://www.netresec.com/index.ashx?page=NetworkMiner',
      icon: <Server className="w-6 h-6" />,
    },
    {
      name: 'Ettercap',
      description: 'أداة لهجمات Man-in-the-Middle وتحليل الشبكة.',
      commands: [
        'ettercap -T -q -i eth0',
        'ettercap -G (واجهة رسومية)',
        'ettercap -T -M arp:remote /target1/ /target2/',
      ],
      website: 'https://www.ettercap-project.org/',
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      name: 'Bettercap',
      description: 'أداة حديثة للهجمات على الشبكة والمراقبة.',
      commands: [
        'bettercap -iface eth0',
        'net.probe on',
        'net.sniff on',
        'arp.spoof on',
      ],
      website: 'https://www.bettercap.org/',
      icon: <Shield className="w-6 h-6" />,
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
              أدوات تحليل الشبكات
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات التقاط وتحليل حزم البيانات وحركة الشبكة.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية لتحليل حركة الشبكة."
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

export default NetworkAnalysisTools;