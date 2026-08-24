import Image from "next/image";

type Partner = { title: string; logo: string };

export default function PartnerSlider({ partners }: { partners: Partner[] }) {
  const slides = [...partners, ...partners];

  return <div className="partner-slider" aria-label="Unsere Hotelpartner">
    <div className="partner-track">
      {slides.map((partner, index) => <div className="partner-slide" key={`${partner.title}-${index}`} aria-hidden={index >= partners.length}>
        <Image src={partner.logo} alt={index < partners.length ? partner.title : ""} width={320} height={180} />
      </div>)}
    </div>
  </div>;
}
