import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link} className="group">
      {" "}
      <div className="relative h-full rounded-md xl:rounded-l-none xl:rounded-r-md overflow-hidden">
        {" "}
        <Image
          src={project.image}
          alt={project.name}
          layout="responsive"
          width={200}
          height={200}
          className="object-cover object-center w-full h-full group-hover:scale-125 group-hover:duration-200 transition-all"
        />{" "}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          {" "}
          <h3 className="text-lg font-medium text-white">
            {project.name}
          </h3>{" "}
          <p className="text-sm text-white uppercase font-medium mb-2 bg-primary rounded-full w-fit px-2">
            {project.category}
          </p>{" "}
          <p className="text-sm text-gray-400">{project.description}</p>{" "}
        </div>{" "}
      </div>{" "}
    </Link>
  );
};

export default ProjectCard;
