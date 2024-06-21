"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    designation: string;
    description: string[];
    link: string;
    date: string;
    imageItem: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-1  lg:grid-cols-1 px-5 max-lg:ml-5 max-md:px-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              // className="absolute inset-x bottom-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="max-lg:mt-8">
          <div className="absolute top-[10px] left-[15.5rem] max-lg:left-auto max-lg:right-0 max-lg:top-5">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 max-lg:text-4xl max-md:text-3xl text-nowrap">
              {item.date}
            </h1>
          </div>
          <Card className="mt-12">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{item.title}</CardTitle>
                <h1 className="text-slate-500 text-xl mt-4 font-open-sans">{item.designation}</h1>
              </div>
              <div>
                <img src={item.imageItem} width={20} height={20} className="w-20 h-20 object-cover rounded-full max-lg:hidden" alt="comapny-images" loading='lazy'/>
              </div>
            </div>
            <CardDescription>
            <ul style={{listStyleType: 'square'}}>
              {item.description.map((desc, idx) => (
                <li key={idx} className="mt-2">{desc}</li>
              ))}
            </ul>
            </CardDescription>
          </Card>
      </div>

        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 max-lg:mt-30",
        className
      )}
    >
        <div className="p-4 max-lg:p-2">{children}</div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1 className={cn("text-zinc-100 font-bold tracking-wide league-spartan mt-4 text-4xl max-lg:text-4xl leading-normal", className)}>
      {children}
    </h1>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h1
      className={cn(
        "mt-8 text-gray-400 tracking-wide leading-relaxed text-[16px] league-spartan",
        className
      )}
    >
      {children}
    </h1>
  );
};
