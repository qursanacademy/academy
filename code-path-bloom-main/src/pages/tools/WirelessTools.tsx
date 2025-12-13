import { Wifi, Radio, Terminal, Shield, Zap, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolDetailCard from '@/components/ToolDetailCard';
import SectionTitle from '@/components/SectionTitle';

const WirelessTools = () => {
  const tools = [
    {
      name: 'Aircrack-ng',
      description: 'مجموعة أدوات كاملة لاختبار أمان الشبكات اللاسلكية.',
      commands: [
        'airmon-ng start wlan0',
        'airodump-ng wlan0mon',
        'airodump-ng -c 6 --bssid XX:XX:XX:XX:XX:XX -w capture wlan0mon',
        'aircrack-ng -w wordlist.txt capture.cap',
      ],
      website: 'https://www.aircrack-ng.org/',
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      name: 'Wifite',
      description: 'أداة آلية لاختراق شبكات WiFi.',
      commands: [
        'wifite',
        'wifite --wpa --dict wordlist.txt',
        'wifite -e "network_name"',
      ],
      website: 'https://github.com/derv82/wifite2',
      icon: <Radio className="w-6 h-6" />,
    },
    {
      name: 'Reaver',
      description: 'أداة لاستغلال ثغرات WPS.',
      commands: [
        'reaver -i wlan0mon -b XX:XX:XX:XX:XX:XX',
        'reaver -i wlan0mon -b XX:XX:XX:XX:XX:XX -vv',
      ],
      website: 'https://github.com/t6x/reaver-wps-fork-t6x',
      icon: <Lock className="w-6 h-6" />,
    },
    {
      name: 'Kismet',
      description: 'نظام كشف الشبكات اللاسلكية والتنصت.',
      commands: [
        'kismet',
        'كشف الشبكات المخفية',
        'تحليل حركة الشبكة',
        'دعم GPS',
      ],
      website: 'https://www.kismetwireless.net/',
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      name: 'Fern WiFi Cracker',
      description: 'أداة رسومية لاختراق شبكات WiFi.',
      commands: [
        'واجهة رسومية سهلة',
        'هجمات WEP/WPA/WPS',
        'هجمات MITM',
      ],
      website: 'https://github.com/savio-code/fern-wifi-cracker',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: 'Fluxion',
      description: 'أداة هجمات Evil Twin والتصيد.',
      commands: [
        'هجوم Evil Twin',
        'التصيد للحصول على كلمة المرور',
        'واجهة تفاعلية',
      ],
      website: 'https://github.com/FluxionNetwork/fluxion',
      icon: <Zap className="w-6 h-6" />,
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
              أدوات الـ Wireless
            </h1>
            <p className="text-muted-foreground text-lg">
              أدوات اختبار أمان الشبكات اللاسلكية.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="الأدوات المتاحة" 
            subtitle="أدوات أساسية لاختبار أمان الشبكات اللاسلكية."
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

export default WirelessTools;