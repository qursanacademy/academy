import { Youtube, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const YoutubeChannelsPage = () => {
    const channels = [
        {
            title: 'NetworkChuck',
            description: 'قناة رائعة لتعلم الشبكات والأمن السيبراني بطريقة ممتعة.',
            link: 'https://www.youtube.com/@NetworkChuck',
        },
        {
            title: 'John Hammond',
            description: 'محتوى متنوع في الأمن السيبراني و CTF والبرمجة.',
            link: 'https://www.youtube.com/@_JohnHammond',
        },
        {
            title: 'IppSec',
            description: 'شروحات تفصيلية لحل تحديات Hack The Box.',
            link: 'https://www.youtube.com/@ippsec',
        },
        {
            title: 'HackerSploit',
            description: 'دروس في اختبار الاختراق والأمن السيبراني.',
            link: 'https://www.youtube.com/@HackerSploit',
        },
        {
            title: 'The Cyber Mentor',
            description: 'دورات شاملة في اختبار الاختراق الأخلاقي.',
            link: 'https://www.youtube.com/@TCMSecurityAcademy',
        },
        {
            title: 'LiveOverflow',
            description: 'محتوى متقدم في أمن التطبيقات والثغرات الأمنية.',
            link: 'https://www.youtube.com/@LiveOverflow',
        },
        {
            title: 'STÖK',
            description: 'Bug bounty hunting والأمن السيبراني.',
            link: 'https://www.youtube.com/@STOKfredrik',
        },
        {
            title: 'NahamSec',
            description: 'Bug bounty tips وشروحات أمن الويب.',
            link: 'https://www.youtube.com/@NahamSec',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-24 pb-16 relative">
                <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                            <Youtube className="w-5 h-5 text-secondary" />
                            <span className="text-secondary text-sm font-medium">قنوات يوتيوب</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
                            قنوات يوتيوب مفيدة
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            أفضل قنوات يوتيوب لتعلم الأمن السيبراني واختبار الاختراق.
                        </p>
                    </div>
                </div>
            </section>

            {/* Channels */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {channels.map((channel, index) => (
                            <div
                                key={index}
                                className="cyber-card group opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                                            <Youtube className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                                        {channel.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {channel.description}
                                    </p>

                                    <a
                                        href={channel.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                                    >
                                        <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                                            زيارة القناة
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

export default YoutubeChannelsPage;
