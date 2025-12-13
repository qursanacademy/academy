import { ExternalLink, Terminal } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  tutorialLink: string;
  icon?: React.ReactNode;
}

const ToolCard = ({ name, description, tutorialLink, icon }: ToolCardProps) => {
  return (
    <div className="cyber-card group">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary/30 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5)]">
            {icon || <Terminal className="w-6 h-6" />}
          </div>
          <h3 className="text-xl font-bold font-display text-primary group-hover:glow-green transition-all duration-300 font-mono-en">
            {name}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <a
          href={tutorialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-btn cyber-btn-purple text-sm flex items-center justify-center gap-2 w-full"
        >
          <span>عرض الشرح</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border border-secondary/50" 
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-purple) / 0.1), transparent)',
            backgroundSize: '200% 100%',
            animation: 'border-flow 3s ease infinite',
          }}
        />
      </div>
    </div>
  );
};

export default ToolCard;
