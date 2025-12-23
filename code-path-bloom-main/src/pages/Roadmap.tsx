import {
  Network, Terminal, Shield,
  Target, Globe, Server, BookOpen, Youtube
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import SectionTitle from '@/components/SectionTitle';

const Roadmap = () => {
  const beginnerCourses = [
    {
      title: 'أساسيات الأمن السيبراني',
      description: 'تعلم أساسيات الحاسوب والأمان مع دورات CompTIA A+ و Security+.',
      link: '/roadmap/cybersecurity-basics',
      icon: <Shield className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'نظام لينكس',
      description: 'إتقان سطر أوامر لينكس، أنظمة الملفات، ومهارات الإدارة الأساسية.',
      link: '/roadmap/linux',
      icon: <Terminal className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'البرمجة',
      description: 'تعلم أساسيات البرمجة وبايثون للأمن السيبراني وكتابة السكربتات.',
      link: '/roadmap/programming',
      icon: <Terminal className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'الشبكات',
      description: 'فهم أساسيات الشبكات، TCP/IP، نموذج OSI، وبروتوكولات الشبكات الأساسية.',
      link: '/roadmap/networking',
      icon: <Network className="w-5 h-5" />,
      isInternal: true,
    },
  ];

  const intermediateCourses = [
    {
      title: 'البداية في اختبار الاختراق',
      description: 'ابدأ رحلتك في اختبار الاختراق مع دورات eJPT و OSCP.',
      link: '/roadmap/pentest-basics',
      icon: <Target className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'اختبار اختراق الويب',
      description: 'تعلم تقنيات اختبار اختراق تطبيقات الويب واكتشاف الثغرات.',
      link: '/roadmap/web-pentest',
      icon: <Globe className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'Active Directory',
      description: 'تعلم أساسيات Active Directory واختراق بيئات Windows المؤسسية.',
      link: '/roadmap/active-directory',
      icon: <Server className="w-5 h-5" />,
      isInternal: true,
    },
  ];

  const advancedCourses = [
    {
      title: 'الهندسة العكسية وتحليل البرمجيات الخبيثة',
      description: 'الهندسة العكسية للبرمجيات الخبيثة، فهم تقنيات الهجوم والمؤشرات.',
      link: '/roadmap/malware-analysis',
      icon: <Shield className="w-5 h-5" />,
      isInternal: true,
    },
  ];

  const usefulResources = [
    {
      title: 'دورات شاملة',
      description: 'دورات عربية متكاملة لتعلم الاختراق الأخلاقي واكتشاف الثغرات.',
      link: '/resources/comprehensive-courses',
      icon: <Youtube className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'مواقع مفيدة',
      description: 'مجموعة مختارة من المواقع المفيدة في مجال الأمن السيبراني واختبار الاختراق.',
      link: '/resources/websites',
      icon: <BookOpen className="w-5 h-5" />,
      isInternal: true,
    },
    {
      title: 'قنوات يوتيوب مفيدة',
      description: 'أفضل قنوات يوتيوب العربية والإنجليزية لتعلم الأمن السيبراني.',
      link: '/resources/youtube-channels',
      icon: <Youtube className="w-5 h-5" />,
      isInternal: true,
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
              خارطة طريق التعلم
            </h1>
            <p className="text-muted-foreground text-lg">
              اتبع هذا المسار المنظم للتقدم من مبتدئ في الأمن السيبراني إلى ممارس متقدم.
              كل مورد يرتبط بدورات ومنصات خارجية.
            </p>
          </div>
        </div>
      </section>

      {/* Beginner Level */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="المستوى المبتدئ"
            subtitle="ابنِ أساسك مع المعرفة الضرورية في الحوسبة والشبكات وأساسيات الأمان."
            glowColor="green"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beginnerCourses.map((course, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard {...course} level="beginner" isInternal={course.isInternal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate Level */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="المستوى المتوسط"
            subtitle="طوّر مهارات القرصنة العملية، تعلم الأدوات الأساسية، وابدأ الاستغلال العملي."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intermediateCourses.map((course, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard {...course} level="intermediate" isInternal={course.isInternal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Level */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Blue Team"
            subtitle="قسم الفريق الدفاعي في الأمن السيبراني"
            glowColor="purple"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCourses.map((course, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard {...course} level="advanced" isInternal={course.isInternal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Resources */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="مصادر مفيدة"
            subtitle="موارد إضافية لدعم رحلتك في تعلم الأمن السيبراني."
            glowColor="green"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usefulResources.map((resource, index) => (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CourseCard {...resource} isInternal={resource.isInternal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;
