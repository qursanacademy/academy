import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced';
  isInternal?: boolean;
}

const CourseCard = ({ title, description, link, icon, level, isInternal = false }: CourseCardProps) => {
  const levelColors = {
    beginner: 'level-beginner',
    intermediate: 'level-intermediate',
    advanced: 'level-advanced',
  };

  const levelLabels = {
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
  };

  const LinkContent = () => (
    <>
      <span className="border-b border-primary/50 group-hover/link:border-primary transition-colors">
        {isInternal ? 'عرض المصادر' : 'ابدأ التعلم'}
      </span>
      {!isInternal && (
        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" />
      )}
    </>
  );

  return (
    <div className="cyber-card group">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                {icon}
              </div>
            )}
            {level && (
              <span className={`level-badge ${levelColors[level]}`}>
                {levelLabels[level]}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:glow-green transition-all duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {isInternal ? (
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
          >
            <LinkContent />
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
          >
            <LinkContent />
          </a>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors" />
    </div>
  );
};

export default CourseCard;