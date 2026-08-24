import Image from "next/image";
import type { ReactNode } from "react";

const bannerImages = [
  { src: "/images/service-slider.jpg", position: "center" },
  { src: "/images/couple-doing-check-hotel-reception-front-desk.jpg", position: "center" },
  { src: "/images/Startseite-Unser-Service-Public-Area.webp", position: "center" },
  { src: "/images/Karriere.jpg", position: "center 35%" },
];

export default function SharedHero({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`shared-hero ${className}`}>
    <div className="shared-hero-slides" aria-hidden="true">
      {bannerImages.map((image, index) => <Image key={image.src} className={`shared-hero-slide shared-hero-slide-${index + 1}`} src={image.src} alt="" fill priority={index === 0} sizes="100vw" style={{ objectPosition: image.position }} />)}
    </div>
    <div className="shared-hero-shade" />
    {children}
  </section>;
}
