import { ExternalLink, Terminal } from 'lucide-react';

interface ToolDetailCardProps {
  name: string;
  description: string;
  commands?: string[];
  website: string;
  icon?: React.ReactNode;
}

const ToolDetailCard = ({ name, description, commands, website, icon }: ToolDetailCardProps) => {
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
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {commands && commands.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs text-primary/70 uppercase tracking-wider mb-2">الأوامر الأساسية:</h4>
            <div className="bg-background/50 rounded-lg p-3 border border-primary/20">
              {commands.map((cmd, index) => (
                <code 
                  key={index} 
                  className="block text-xs text-secondary font-mono mb-1 last:mb-0 break-all"
                  dir="ltr"
                >
                  {cmd}
                </code>
              ))}
            </div>
          </div>
        )}
        
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-btn cyber-btn-purple text-sm flex items-center justify-center gap-2 w-full"
        >
          <span>الموقع الرسمي</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ToolDetailCard;