import { ExternalLink } from 'lucide-react';

interface Resource {
  name: string;
  url: string;
  description?: string;
}

interface ResourceSectionProps {
  title: string;
  icon: React.ReactNode;
  resources: Resource[];
}

const ResourceSection = ({ title, icon, resources }: ResourceSectionProps) => {
  return (
    <div className="cyber-card">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded bg-primary/10 text-primary">
            {icon}
          </div>
          <h2 className="text-xl font-bold font-display text-primary">
            {title}
          </h2>
        </div>
        
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex-1">
                <span className="text-primary font-medium group-hover:glow-green transition-all duration-300">
                  {resource.name}
                </span>
                {resource.description && (
                  <p className="text-muted-foreground text-xs mt-1">
                    {resource.description}
                  </p>
                )}
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
