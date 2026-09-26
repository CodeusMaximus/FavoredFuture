"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Parent",
        review:
            "Favored Future has completely changed my son's confidence both on and off the court. The mentorship has been just as valuable as the basketball training.",
    },
    {
        name: "Marcus Williams",
        role: "Student Athlete",
        review:
            "The coaches genuinely care about our success. Every workout pushes me to become a better athlete and a better person.",
    },
    {
        name: "Ashley Brown",
        role: "Parent",
        review:
            "Professional, organized, and inspiring. My daughter has grown tremendously since joining the program.",
    },
    {
        name: "Coach Daniels",
        role: "Partner School",
        review:
            "Our partnership with Favored Future has created opportunities our students never imagined possible.",
    },
    {
        name: "David Rodriguez",
        role: "Player",
        review:
            "The leadership lessons and discipline I've learned here have helped me in school and in basketball.",
    },
    {
        name: "Lisa Green",
        role: "Community Partner",
        review:
            "An incredible organization truly committed to creating positive change in young people's lives.",
    },
];

const duplicated = [...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="overflow-hidden bg-white py-28"
        >
            <div className="mx-auto mb-20 max-w-3xl px-6 text-center">

                <span className="uppercase tracking-[.4em] text-zinc-500">
                    Testimonials
                </span>

                <h2 className="mt-5 text-5xl font-black text-black md:text-7xl">
                    What Families Are Saying
                </h2>

                <p className="mt-8 text-lg leading-8 text-zinc-600">
                    Our greatest success isn't measured in wins—it's measured in the
                    lives we impact every single day.
                </p>

            </div>

            {/* Top Row */}

            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex w-max gap-8"
            >
                {duplicated.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </motion.div>

            {/* Bottom Row */}

            <motion.div
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 40,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="mt-8 flex w-max gap-8"
            >
                {duplicated.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </motion.div>
        </section>
    );
}

interface CardProps {
    name: string;
    role: string;
    review: string;
}

function Card({ name, role, review }: CardProps) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="w-[360px] rounded-[34px] border border-zinc-200 bg-white p-8 shadow-xl transition"
        >
            <Quote
                className="text-zinc-300"
                size={38}
            />

            <div className="mt-5 flex">

                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        fill="#facc15"
                        className="text-yellow-400"
                    />
                ))}

            </div>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
                "{review}"
            </p>

            <div className="mt-8 flex items-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-bold text-white">

                    {name.charAt(0)}

                </div>

                <div className="ml-4">

                    <h3 className="font-bold">
                        {name}
                    </h3>

                    <p className="text-sm text-zinc-500">
                        {role}
                    </p>

                </div>

            </div>
        </motion.div>
    );
}