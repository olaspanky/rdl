// components/CaseStudyCard.tsx
import Image from "next/image";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function CaseStudyCard({
  image,
  title,
  description,
  link,
}: CaseStudyCardProps) {
  return (
    <div className="relative w-full h-[450px]  overflow-hidden shadow-lg group">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay Box */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-white  shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-2 work">{description}</p>
         
        </div>
      </div>
    </div>
  );
}
