"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Trophy,
    Music2,
    GraduationCap,
    Users,
    HeartHandshake,
    ArrowRight,
} from "lucide-react";

const pillars = [
    {
        icon: Trophy,
        title: "Sports",
        description:
            "Developing athletes through elite coaching, leadership, and competitive opportunities.",
    },
    {
        icon: Music2,
        title: "Media & Music",
        description:
            "Helping creators build brands, tell stories, and reach larger audiences.",
    },
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "Creating pathways toward academic achievement and lifelong success.",
    },
    {
        icon: Users,
        title: "Leadership",
        description:
            "Developing confident young leaders on and off the court.",
    },
    {
        icon: HeartHandshake,
        title: "Community",
        description:
            "Building stronger communities through mentorship, outreach, and service.",
    },
];

const brands = [
    "Sports Division",
    "Favored Future Elite",
    "Talent Management",
    "Media Division",
    "Future Mode",
    "Partnerships",
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >
                        <span className="font-semibold uppercase tracking-[.35em] text-gray-500">
                            About Favored Future
                        </span>

                        <h2 className="mt-5 text-5xl font-black leading-none text-black md:text-7xl">
                            Building Today.
                            <br />
                            Impacting Forever.
                        </h2>

                        <div className="mt-8 h-1 w-24 rounded-full bg-black" />

                        <p className="mt-8 text-lg leading-9 text-gray-600">
                            Favored Future is more than a sports organization—
                            we're a youth development company dedicated to
                            creating opportunities through athletics,
                            education, leadership, media, and community
                            partnerships.
                        </p>

                        <p className="mt-6 text-lg leading-9 text-gray-600">
                            Our mission is to equip young people with the
                            resources, mentorship, and experiences needed to
                            thrive both on and off the court while building the
                            next generation of leaders.
                        </p>

                        <button className="group mt-10 flex items-center rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
                            Learn More

                            <ArrowRight className="ml-3 transition group-hover:translate-x-1" />
                        </button>
                    </motion.div>

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-6 rounded-[40px] bg-black/5 blur-3xl" />

                        <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-2xl">

                            <video
                                className="h-full w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                            >
                                <source
                                    src="/videos/littleman.mp4"
                                    type="video/mp4"
                                />

                                Your browser does not support HTML5 video.
                            </video>

                        </div>
                    </motion.div>

                </div>

                {/* Mission */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                    className="mt-32 rounded-[40px] bg-black px-10 py-14 text-white"
                >
                    <h3 className="text-4xl font-black">
                        Our Mission
                    </h3>

                    <p className="mt-6 max-w-4xl text-xl leading-9 text-white/80">
                        To create, nurture, and protect future leaders by
                        equipping them with the tools, mentorship, education,
                        athletic opportunities, and community support needed to
                        succeed in every area of life.
                    </p>
                </motion.div>

                {/* Core Focus */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {pillars.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * .08 }}
                                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                                    <Icon size={32} />
                                </div>

                                <h4 className="mt-6 text-2xl font-bold">
                                    {item.title}
                                </h4>

                                <p className="mt-4 leading-8 text-gray-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Brands */}

                <div className="mt-28">

                    <h3 className="text-center text-4xl font-black">
                        Our Portfolio
                    </h3>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {brands.map((brand) => (
                            <motion.div
                                key={brand}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-3xl border border-gray-200 p-8 transition hover:border-black"
                            >
                                <h4 className="text-2xl font-bold">
                                    {brand}
                                </h4>

                                <p className="mt-3 text-gray-600">
                                    Empowering young people through innovative
                                    programs and meaningful opportunities.
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* Stats */}

                <div className="mt-28 rounded-[40px] bg-neutral-950 px-10 py-16 text-white">

                    <div className="grid text-center md:grid-cols-4">

                        {[
                            ["250+", "Youth Served"],
                            ["35+", "Partners"],
                            ["6", "Programs"],
                            ["100%", "Purpose"],
                        ].map(([number, label]) => (

                            <div key={label} className="py-6">

                                <h3 className="text-6xl font-black">
                                    {number}
                                </h3>

                                <p className="mt-3 uppercase tracking-[.2em] text-white/60">
                                    {label}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}