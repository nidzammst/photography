"use client";

import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
    <section className="container mx-auto">
      <div className="relative bg-tertiary dark:bg-transparent overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto mx-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <Fade
                direction="left"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h2 className="h2 text-primary font-bold gap-x-3 mb-12 text-center mx-auto">
                  Need a Photographer?
                </h2>
              </Fade>
              <Fade
                direction="left"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <p className="mt-4 text-lg leading-8 subtitle">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you. But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system
                </p>
              </Fade>

              <Fade
                direction="left"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <div className="mt-6 max-w-md gap-x-4 flex max-sm:flex-wrap">
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeHolder="Enter your email"
                    className=""
                  />
                  <Link href="/contact" className="my-auto max-sm:w-full">
                    <Button className="max-sm:w-full max-sm:mt-2">
                      Subscribe <RiMenFill size={18} />
                    </Button>
                  </Link>
                </div>
              </Fade>
            </div>

            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <Fade
                direction="right"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <div className="flex flex-col items-start">
                  <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                    <CalendarDaysIcon className="h-6 w-6 text-white" />
                  </div>

                  <dt className="mt-4 font-semibold text-muted-foreground">
                    Weekly articles
                  </dt>
                  <dd className="mt-2 leading-7 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci repudiandae modi totam!
                  </dd>
                </div>
              </Fade>

              <Fade
                direction="right"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <div className="flex flex-col items-start">
                  <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                    <HandRaisedIcon className="h-6 w-6 text-white" />
                  </div>

                  <dt className="mt-4 font-semibold text-muted-foreground">
                    Full Security
                  </dt>
                  <dd className="mt-2 leading-7 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci repudiandae modi totam!
                  </dd>
                </div>
              </Fade>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
