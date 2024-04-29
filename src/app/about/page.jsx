"use client";

import HeroImg from "@/components/HeroImg";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  RiRidingFill,
  RiSendPlaneFill,
  RiStarHalfSLine,
  RiUserHeartFill,
  RiVidiconFill,
  RiVipCrown2Fill,
} from "react-icons/ri";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mrs Smith",
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 99 787 7761",
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "photographer@gmail.com",
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "Born on 23 january, 2000",
  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: "Master Degree",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "22, Ella Statu, Texas, US",
  },
];

const About = () => {
  return (
    <section className="pb-12 min-h-screen xl:py-24 ">
      <div className="container mx-auto max-sm:overflow-hidden">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About Me
          </h2>
        </Fade>

        <div className="flex flex-col xl:flex-row xl:gap-12">
          {/* Image */}
          <div className="relative flex-1 xl:flex mx-auto">
            <Fade
              direction="left"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <HeroImg
                containerStyles="w-[450px] h-[450px] lg:w-[505px] lg:h-[505px] max-sm:w-[320px] max-sm:h-[320px] bg-no-repeat relative"
                imgSrc="/about/profile.png"
              />
            </Fade>
          </div>

          <div className="flex-1">
            {/* COntent */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <Fade
                  direction="right"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="h-3 mb-4">
                    Let&apos;s plan your perfect photoshoot
                  </h3>
                </Fade>
                <Fade
                  direction="right"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Our mission is to further develop the overall excellence of
                    photography and to capture memories that will be cherished
                    for a lifetime, in the timeless photographs.
                  </p>
                </Fade>
                <Fade
                  direction="right"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Professional photography services combine the classic
                    knowledge of traditional photographic portraiture and
                    contemporary style.
                  </p>
                </Fade>

                {/* Icons */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  <Fade
                    direction="right"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    {infoData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
