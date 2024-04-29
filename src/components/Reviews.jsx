"use client";

import React from "react";
// Swiperjs
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Lopez Chris",
    job: "CEO",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Hamilton",
    job: "CEO",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quod iste facilis similique veniam architecto. Doloremque est sapiente molestiae totam.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mark Zuckerberg",
    job: "CEO",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, veritatis consequatur error placeat, amet similique ex eveniet ut laudantium pariatur?",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Lopez Chris",
    job: "CEO",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Lopez Chris",
    job: "CEO",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Steve Job",
    job: "CEO",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto max-sm:overflow-hidden">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h2 className="h1 text-primary text-4xl font-bold gap-x-3 mb-12 text-center mx-auto">
            They say about our work
          </h2>
        </Fade>
        <Fade
          direction="up"
          delay={600}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          {/* Slider */}
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={{ Pagination }}
            pagination={{
              // clickable: true,
              dynamicBullets: true,
            }}
            className="h-[350px]"
          >
            {reviewsData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className="p-8 min-h-[300px]">
                    <CardHeader className="p-0 mb-3">
                      <div className="flex flex-col items-start gap-x-4">
                        {/* Avatar */}
                        <Image
                          src={person.avatar}
                          width={70}
                          height={70}
                          alt=""
                          priority
                          className="mb-2"
                        />
                        {/* Name */}
                        <div className="flex flex-col">
                          <CardTitle>{person.name}</CardTitle>
                          <p>{person.job}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;
