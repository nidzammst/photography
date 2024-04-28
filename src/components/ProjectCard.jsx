import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            width={440}
            height={200}
            alt=""
            priority
            className="absolute top-0 shadow-2xl hover:scale-110 transition-all "
          />
        </div>
      </CardHeader>

      <div>
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
      </div>
    </Card>
  );
};

export default ProjectCard;
