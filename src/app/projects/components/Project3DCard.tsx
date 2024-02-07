import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/app/types";
import Link from "next/link";
import ProjectStatusIndicator from "./ProjectStatusIndicator";
import Icons from "@/app/experience/components/Icons";
import { IoIosMore } from "react-icons/io";
import { Button } from "@/components/ui/button";

type Project3DCardProps = {
  project: Project;
};

export default function Project3DCard({ project }: Project3DCardProps) {
  const firstFiveTechStack = project.techStack.filter((_, index) => index < 5);

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] lg:w-[30rem] w-[18rem] h-auto rounded-xl p-6 border  ">
        <div className="flex flex-row w-full justify-between">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-indigo-400"
          >
            {project.name}
          </CardItem>
          <CardItem translateZ="50" className="flex items-center">
            <p className="text-xs pr-2">{project.status}</p>
            <ProjectStatusIndicator status={project.status} />
          </CardItem>
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 truncate w-full"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.thumbnail}
            className="lg:h-60 h-40 w-full object-cover rounded-xl"
            alt={project.name}
          />
        </CardItem>
        <CardItem
          translateZ="100"
          className="w-full mt-4 flex gap-2 flex-wrap items-end"
        >
          <Icons techStack={firstFiveTechStack} />
          & More
          <IoIosMore />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          {project.url ? (
            <Link href={project.url} target="_blank">
              <CardItem
                translateZ={20}
                as="button"
                className="pl-1 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {project.url && "Visit →"}
              </CardItem>
            </Link>
          ) : (
            <div />
          )}
          <CardItem translateZ={20}>
            <Button size="sm" className="text-xs" disabled>
              view-details
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
