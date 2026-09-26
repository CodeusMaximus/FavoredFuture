"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Check,
    Star,
} from "lucide-react";

const plans = [
    {
        name: "Future Builder",
        subtitle: "Perfect for Beginners",
        price: "$199",
        popular: false,
        color: "border-zinc-300",
        button: "Join Program",
        features: [
            "4 Training Sessions / Month",
            "Initial Player Evaluation",
            "Small Group Training",
            "Monthly Progress Tracking",
            "Parent Updates",
            "Access to Community Events",
        ],
    },

    {
        name: "Next Level",
        subtitle: "Most Popular",
        price: "$349",
        popular: true,
        color: "border-amber-400",
        button: "Become Elite",
        features: [
            "8 Training Sessions / Month",
            "Player Development Plan",
            "Strength & Conditioning",
            "Leadership Development",
            "Academic Accountability",
            "Film Review",
            "Priority Registration",
        ],
    },

    {
        name: "Legacy Elite",
        subtitle: "Maximum Development",
        price: "$599",
        popular: false,
        dark: true,
        color: "border-black",
        button: "Join Legacy",
        features: [
            "Unlimited Training",
            "Private Skill Development",
            "Nutrition Guidance",
            "Recruiting Assistance",
            "Recovery Sessions",
            "Parent Meetings",
            "Priority Scheduling",
            "Tournament Preparation",
        ],
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="bg-neutral-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="uppercase tracking-[.4em] text-zinc-500">
                        Membership Plans
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-black md:text-7xl">
                        Invest In Their Future.
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-zinc-600">
                        Flexible membership options designed to help every
                        athlete, creator, and future leader reach their
                        highest potential.
                    </p>

                </motion.div>

                {/* Pricing Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {plans.map((plan, index) => (

                        <motion.div
                            key={plan.name}
                            initial={{
                                opacity: 0,
                                y: 70,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * .15,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                            }}
                            className={`relative overflow-hidden rounded-[34px] border-2 ${plan.color}
                            
                            ${plan.dark
                                    ? "bg-black text-white"
                                    : "bg-white"
                                }

                            shadow-xl
                            transition-all
                            duration-500
                            `}
                        >

                            {plan.popular && (

                                <div className="absolute right-6 top-6 flex items-center rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-black">

                                    <Star
                                        className="mr-2"
                                        size={15}
                                        fill="black"
                                    />

                                    MOST POPULAR

                                </div>

                            )}

                            <div className="p-10">

                                <p className="text-sm uppercase tracking-[.3em] opacity-70">

                                    {plan.subtitle}

                                </p>

                                <h3 className="mt-5 text-4xl font-black">

                                    {plan.name}

                                </h3>

                                <div className="mt-8 flex items-end">

                                    <span className="text-6xl font-black">

                                        {plan.price}

                                    </span>

                                    <span className="mb-2 ml-3 opacity-70">

                                        / month

                                    </span>

                                </div>

                                <div className="mt-10 space-y-5">

                                    {plan.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-center"
                                        >

                                            <div
                                                className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full

                                                ${plan.dark
                                                        ? "bg-white text-black"
                                                        : "bg-black text-white"
                                                    }
                                                `}
                                            >

                                                <Check
                                                    size={16}
                                                />

                                            </div>

                                            <span className="text-lg">

                                                {feature}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                <button
                                    className={`group mt-12 flex w-full items-center justify-center rounded-full py-5 text-lg font-bold transition

                                    ${plan.dark
                                            ? "bg-white text-black hover:bg-zinc-200"
                                            : plan.popular
                                                ? "bg-amber-400 text-black hover:bg-amber-300"
                                                : "bg-black text-white hover:bg-zinc-800"
                                        }

                                    `}
                                >

                                    {plan.button}

                                    <ArrowRight
                                        className="ml-3 transition group-hover:translate-x-1"
                                    />

                                </button>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}