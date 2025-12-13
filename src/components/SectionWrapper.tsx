import { ReactNode } from 'react';
import { useSectionColor } from '@/hooks/useSanity';

interface SectionWrapperProps {
  sectionName: string;
  children: ReactNode;
  className?: string;
  defaultBackground?: string;
}

/**
 * Wrapper component that applies section-specific colors from Sanity
 * Usage: <SectionWrapper sectionName="hero">...</SectionWrapper>
 */
export const SectionWrapper = ({ 
  sectionName, 
  children, 
  className = '',
  defaultBackground 
}: SectionWrapperProps) => {
  const sectionColors = useSectionColor(sectionName);

  const styles: React.CSSProperties = {};
  
  if (sectionColors?.backgroundColor) {
    styles.backgroundColor = `hsl(${sectionColors.backgroundColor})`;
  } else if (defaultBackground) {
    styles.backgroundColor = defaultBackground;
  }

  if (sectionColors?.textColor) {
    styles.color = `hsl(${sectionColors.textColor})`;
  }

  return (
    <section 
      className={className}
      style={styles}
      data-section={sectionName}
    >
      {children}
    </section>
  );
};

/**
 * Hook to get section-specific color styles
 */
export const useSectionStyles = (sectionName: string) => {
  const sectionColors = useSectionColor(sectionName);
  
  return {
    sectionStyle: {
      backgroundColor: sectionColors?.backgroundColor 
        ? `hsl(${sectionColors.backgroundColor})` 
        : undefined,
      color: sectionColors?.textColor 
        ? `hsl(${sectionColors.textColor})` 
        : undefined,
    },
    headingStyle: {
      color: sectionColors?.headingColor 
        ? `hsl(${sectionColors.headingColor})` 
        : undefined,
    },
    buttonStyle: {
      backgroundColor: sectionColors?.buttonBackgroundColor 
        ? `hsl(${sectionColors.buttonBackgroundColor})` 
        : undefined,
      color: sectionColors?.buttonTextColor 
        ? `hsl(${sectionColors.buttonTextColor})` 
        : undefined,
    },
    linkStyle: {
      color: sectionColors?.linkColor 
        ? `hsl(${sectionColors.linkColor})` 
        : undefined,
    },
    accentStyle: {
      color: sectionColors?.accentColor 
        ? `hsl(${sectionColors.accentColor})` 
        : undefined,
    },
    sectionColors, // Expose full object for custom use
  };
};

