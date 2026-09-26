"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slides } from "../slides";

const AUTO_PLAY = 7000;

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, AUTO_PLAY);

        return () => clearInterval(interval);
    }, []);

    const slide = slides[current];

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 pt-16 md:pt-24 lg:pt-28">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#262626_0%,#090909_55%)]" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

            <div
                className={`
        relative
        z-10
        mx-auto
        grid
        w-full
        max-w-7xl
        items-center
        gap-6
        px-6
        md:gap-10
        lg:grid-cols-2
        lg:px-8
        ${slide.title === "Train Today"
                        ? "lg:gap-32 xl:gap-40"
                        : slide.overlap
                            ? "lg:gap-10"
                            : "lg:gap-16"
                    }
    `}
            >

                {/* LEFT */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.7 }}
                        className="text-center lg:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-4 uppercase tracking-[0.45em] text-sm text-white/60"
                        >
                            Favored Future
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="relative z-30 text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            {slide.title}
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 110 }}
                            transition={{ delay: 0.3 }}
                            className="mx-auto mt-6 h-1 rounded-full bg-amber-400 lg:mx-0"
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70 md:mt-7 md:text-lg lg:mx-0"
                        >
                            {slide.description}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 flex flex-nowrap justify-center gap-3 md:mt-12 md:gap-5 lg:justify-start"
                        >
                            <button className="group flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-base">
                                {slide.button}

                                <ArrowRight className="ml-2 transition group-hover:translate-x-1 sm:ml-3" />
                            </button>

                            <button className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:px-8 sm:py-4 sm:text-base">
                                Learn More
                            </button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* RIGHT */}
                {/* RIGHT */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.image}
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -80 }}
                        transition={{ duration: 0.8 }}
                        className={`
            relative
            mx-auto
            flex
            h-[320px]
            w-full
            items-center
            justify-center
            sm:h-[420px]
            md:h-[540px]
            lg:h-[700px]
            ${slide.overlap
                                ? "lg:-ml-40 xl:-ml-48"
                                : ""
                            }
        `}
                    >
                        {/* Glow */}
                        <div
                            className={`
                absolute
                inset-0
                rounded-[60px]
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-transparent
                blur-3xl
                ${slide.overlap
                                    ? "scale-125"
                                    : ""
                                }
            `}
                        />

                        <div
                            className="relative h-full w-full"
                            style={{
                                maskImage:
                                    "radial-gradient(circle at center, black 72%, transparent 100%)",
                                WebkitMaskImage:
                                    "radial-gradient(circle at center, black 72%, transparent 100%)",
                            }}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                priority
                                className="object-contain transition-all duration-700 drop-shadow-[0_50px_110px_rgba(0,0,0,.75)]"
                                style={{
                                    transform: `translate(${slide.imageX ?? 0}px, ${slide.imageY ?? 0
                                        }px) scale(${slide.imageScale ?? 1.03})`,
                                }}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 text-white">

                <span className="text-sm font-bold md:text-base">
                    {(current + 1).toString().padStart(2, "0")}
                </span>

                <div className="h-[2px] w-24 overflow-hidden rounded-full bg-white/20 sm:w-32">

                    <motion.div
                        key={current}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: AUTO_PLAY / 1000,
                            ease: "linear",
                        }}
                        className="h-full bg-white"
                    />

                </div>

                <span className="text-sm font-bold md:text-base">
                    {slides.length.toString().padStart(2, "0")}
                </span>

            </div>
        </section>
    );
}