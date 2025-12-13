interface SectionTitleProps {
  title: string;
  subtitle?: string;
  glowColor?: 'green' | 'purple';
}

const SectionTitle = ({ title, subtitle, glowColor = 'green' }: SectionTitleProps) => {
  const glowClass = glowColor === 'green' ? 'glow-green' : 'glow-purple';
  
  return (
    <div className="text-center mb-12">
      <h2 className={`text-3xl md:text-4xl font-bold font-display text-primary ${glowClass} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
      </div>
    </div>
  );
};

export default SectionTitle;
