import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    image: "/work/3.png",
    category: "Portraits",
    name: "Apr 26, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/4.png",
    category: "Corporate",
    name: "Mar 11, 2013",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "Models",
    name: "Feb 16, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/6.png",
    category: "Places",
    name: "Nov 05, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/7.png",
    category: "Corporate",
    name: "Jan 13, 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/8.png",
    category: "Portraits",
    name: "Dec 2, 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/9.png",
    category: "Fashion",
    name: "Aug 17, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "Corporate",
    name: "Mar 11, 2013",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },

  {
    image: "/work/11.png",
    category: "Corporate",
    name: "Mar 11, 2013",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid!",
    link: "/",
    codepen: "/",
  },
];

const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Gallery
        </h2>
        <div>
          {projectsData.map((project) => {
            return <ProjectCard project={project} key={project.image} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
