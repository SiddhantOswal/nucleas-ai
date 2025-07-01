
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
  className?: string;
  onClick?: () => void;
}

export const GradientCard: React.FC<GradientCardProps> = ({
  icon,
  title,
  description,
  linkLabel,
  linkHref,
  className,
  onClick
}) => {
  const CardContent = (
    <div className={cn(
      "relative p-6 rounded-2xl bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-400/30 flex items-center justify-center">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        
        {linkLabel && (
          <div className="mt-4 pt-4 border-t border-white/10 dark:border-white/20">
            <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
              {linkLabel} →
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (linkHref) {
    return (
      <a href={linkHref} className="block h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="h-full">
      {CardContent}
    </div>
  );
};
