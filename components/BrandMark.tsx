import type { CSSProperties } from "react";

type BrandMarkProps = {
  name: string;
  logo: string;
  ratio: number;
  /** Target height in px for a "typical" wordmark; wide marks are scaled down so all marks share a similar visual weight. */
  height: number;
  className?: string;
};

/*
 * Renders an official brand logo as a single-colour silhouette (CSS mask), so marks with
 * different native colours sit together in one tone. Sizing uses the square root of the
 * aspect ratio to balance very wide wordmarks against compact monograms.
 */
export function BrandMark({ name, logo, ratio, height, className = "" }: BrandMarkProps) {
  const area = height * height * 5; // reference area of a 5:1 wordmark at the given height
  const h = Math.min(height * 1.9, Math.sqrt(area / ratio));
  const style: CSSProperties = {
    width: `${(h * ratio).toFixed(1)}px`,
    height: `${h.toFixed(1)}px`,
    maskImage: `url(${logo})`,
    WebkitMaskImage: `url(${logo})`,
  };
  return <span role="img" aria-label={name} className={`brand-mark inline-block shrink-0 ${className}`} style={style} />;
}
