import { techStackConfig } from "@/app/config/tech-stack";
import { TechStack } from "@/enums";

type IconsProps = {
  techStack: TechStack[];
  size?: number;
};

export function Icons({ techStack = [], size = 24 }: IconsProps) {
  function getImages() {
    return techStack.map((item) => ({
      src: techStackConfig[item]?.imageUrl
        ? techStackConfig[item].imageUrl
        : `https://cdn.simpleicons.org/${techStackConfig[item].iconSlug}`,
      alt: techStackConfig[item].name,
    }));
  }

  return (
    <>
      {getImages().map((image) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          width={size}
          height={size}
          title={image.alt}
          className="rounded-1 hover:opacity-80 transition-opacity duration-300 ease-in-out"
        />
      ))}
    </>
  );
}

export default Icons;
