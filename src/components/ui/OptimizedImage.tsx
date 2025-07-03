import React from 'react';
// Vite-imagetools enables importing images with ?imagetools for optimization
// Example: import heroImg from '../assets/hero.png?imagetools'

// Props for the OptimizedImage component
interface OptimizedImageProps {
  src: string; // Relative path to the image (e.g., '../assets/hero.png')
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * OptimizedImage component
 * Uses vite-imagetools to generate AVIF, WebP, and fallback formats automatically.
 * Usage: <OptimizedImage src="../assets/hero.png" alt="Hero" width={600} height={400} />
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, width, height, className }) => {
  // Dynamically import the image with ?imagetools for optimization
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const image = require(`${src}?format=avif;webp;png&as=srcset`);

  return (
    <picture>
      {/* AVIF source (best quality, smallest size) */}
      <source srcSet={image['avif']} type="image/avif" />
      {/* WebP source (fallback if AVIF not supported) */}
      <source srcSet={image['webp']} type="image/webp" />
      {/* Fallback to original format (e.g., PNG/JPG) */}
      <img
        src={image['png'] || src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={className}
        style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
      />
    </picture>
  );
};

// Memoized for render performance
export default React.memo(OptimizedImage);

// Usage example (replace with your actual image path):
// <OptimizedImage src="../assets/hero.png" alt="Hero" width={600} height={400} /> 