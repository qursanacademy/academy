import { Youtube, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';

const ComprehensiveCoursesPage = () => {
    const courses = [
        {
            title: 'دورة الاختراق الاخلاقي - Coder Web',
            description: 'دورة شاملة للاختراق الأخلاقي باللغة العربية تغطي جميع الأساسيات والتقنيات المتقدمة.',
            link: 'https://www.youtube.com/watch?v=IyxgtWKtzQw&list=PLMuAdKgHarVrcZCqzJFdNlTiKz66U19Xk',
            type: 'سلسلة كاملة',
        },
        {
            title: 'دورة اكتشاف ثغرات المواقع - أكاديمية صحيح',
            description: 'تعلم كيفية اكتشاف ثغرات المواقع بطريقة احترافية ومنهجية.',
            link: 'https://www.youtube.com/watch?v=b_EGEerEqvA',
            type: 'دورة متقدمة',
        },
        {
            title: 'دورة الهاكر الاخلاقي 6 ساعات - أكاديمية صحيح',
            description: 'دورة مكثفة لتعلم أساسيات الاختراق الأخلاقي في 6 ساعات فقط.',
            link: 'https://www.youtube.com/watch?v=qaNZKH5NohQ',
            type: 'دورة مكثفة',
        },
        {
            title: 'دورة اختبار الاختراق باستخدام ميتاسبلويت - أكاديمية صحيح',
            description: 'تعلم استخدام أداة Metasploit لاختبار الاختراق والاستغلال.',
            link: 'https://www.youtube.com/watch?v=uThOnvh1zJw',
            type: 'دورة تخصصية',
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
                            <Youtube className="w-5 h-5 text-primary" />
                            <span className="text-primary text-sm font-medium">دورات شاملة</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary glow-green mb-6">
                            دورات عربية متكاملة
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            مجموعة مختارة من أفضل الدورات العربية الشاملة لتعلم الاختراق الأخلاقي واكتشاف الثغرات.
                        </p>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="الدورات المتاحة"
                        subtitle="دورات عربية عالية الجودة من أفضل المدربين."
                        glowColor="green"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="cyber-card group opacity-0 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                            <Youtube className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                                            {course.type}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
                                        {course.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {course.description}
                                    </p>

                                    <a
                                        href={course.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                                    >
                                        <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
                                            مشاهدة الدورة
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

export default ComprehensiveCoursesPage;
