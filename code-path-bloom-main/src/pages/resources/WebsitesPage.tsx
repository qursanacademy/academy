import { BookOpen, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const WebsitesPage = () => {
    const websites = [
        {
            title: 'HackTricks',
            description: 'موسوعة شاملة لتقنيات القرصنة والاختراق مع شروحات تفصيلية.',
            link: 'https://book.hacktricks.xyz/',
            category: 'موارد تعليمية',
        },
        {
            title: 'OWASP',
            description: 'مشروع مفتوح المصدر لأمن تطبيقات الويب مع أدلة وأدوات مجانية.',
            link: 'https://owasp.org/',
            category: 'أمن الويب',
        },
        {
            title: 'PayloadsAllTheThings',
            description: 'مجموعة ضخمة من الـ Payloads المفيدة لاختبار الاختراق.',
            link: 'https://github.com/swisskyrepo/PayloadsAllTheThings',
            category: 'موارد تعليمية',
        },
        {
            title: 'RevShells',
            description: 'مولد Reverse Shells لمختلف اللغات والأنظمة.',
            link: 'https://www.revshells.com/',
            category: 'أدوات تحليل',
        },
        {
            title: 'Exploit Database',
            description: 'قاعدة بيانات للثغرات الأمنية والأدوات المستخدمة في الاستغلال.',
            link: 'https://www.exploit-db.com/',
            category: 'قواعد بيانات',
        },
        {
            title: 'CVE Details',
            description: 'قاعدة بيانات للثغرات الأمنية المعروفة والموثقة.',
            link: 'https://www.cvedetails.com/',
            category: 'قواعد بيانات',
        },
        {
            title: 'GTFOBins',
            description: 'قائمة بالأوامر التي يمكن استغلالها في نظام Unix/Linux.',
            link: 'https://gtfobins.github.io/',
            category: 'أدوات Linux',
        },
        {
            title: 'LOLBAS',
            description: 'Living Off The Land Binaries - أوامر Windows قابلة للاستغلال.',
            link: 'https://lolbas-project.github.io/',
            category: 'أدوات Windows',
        },
        {
            title: 'CyberChef',
            description: 'أداة ويب لتحليل وفك تشفير البيانات.',
            link: 'https://gchq.github.io/CyberChef/',
            category: 'أدوات تحليل',
        },
        {
            title: 'CrackStation',
            description: 'أداة مجانية لفك تشفير الهاشات باستخدام قواعد بيانات ضخمة.',
            link: 'https://crackstation.net/',
            category: 'أدوات تحليل',
        },
        {
            title: 'Pentester Lab',
            description: 'دروس عملية ومختبرات لتعلم اختبار الاختراق.',
            link: 'https://pentesterlab.com/',
            category: 'موارد تعليمية',
        },
        {
            title: 'Awesome Hacking',
            description: 'قائمة منسقة بأفضل الموارد في مجال الأمن السيبراني.',
            link: 'https://github.com/Hack-with-Github/Awesome-Hacking',
            category: 'موارد تعليمية',
        },
    ];

    const forums = [
        {
            title: 'منتدى شبكة شل العربية',
            description: 'منتدى عربي للدراسة ولتبادل خبرات الأمن السيبراني ويجمع خبرات كبيرة',
            link: 'https://sh3ll.cloud/xf2/',
            category: 'منتدى',
        },
        {
            title: 'منصة عرب سيكوبس',
            description: 'منصة فيها المعسكرات التالية في اختبار الاختراق',
            link: 'https://arabsecops.com/bootcamp.php',
            category: 'منصة تدريب',
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
                            <BookOpen className="w-5 h-5 text-primary" />
                            <span className="text-primary text-sm font-medium">موارد إضافية</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
                            مواقع مفيدة
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            مجموعة مختارة من أفضل المواقع في مجال الأمن السيبراني واختبار الاختراق.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="المواقع المميزة"
                        subtitle="استكشف هذه المصادر القيمة لتطوير مهاراتك."
                        glowColor="green"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {websites.map((website, index) => (
                            <div
                                key={index}
                                className="cyber-card group opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                                            {website.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                                        {website.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {website.description}
                                    </p>

                                    <a
                                        href={website.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                                    >
                                        <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                                            زيارة الموقع
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

            {/* Forums and Platforms */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="منتديات ومنصات مفيدة"
                        subtitle="مجتمعات عربية لتبادل الخبرات والتعلم في الأمن السيبراني."
                        glowColor="purple"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {forums.map((forum, index) => (
                            <div
                                key={index}
                                className="cyber-card group opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                                            {forum.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:glow-purple transition-all duration-300">
                                        {forum.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {forum.description}
                                    </p>

                                    <a
                                        href={forum.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link"
                                    >
                                        <span className="border-b border-secondary/50 group-hover/link:border-secondary transition-colors">
                                            زيارة الموقع
                                        </span>
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" />
                                    </a>
                                </div>

                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebsitesPage;
