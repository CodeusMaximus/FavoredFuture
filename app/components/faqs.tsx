"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Who can participate in Favored Future programs?",
        answer:
            "Our programs are designed for youth, student-athletes, aspiring musicians, and young leaders looking to develop their skills both on and off the court. We welcome participants of various ages and experience levels.",
    },
    {
        question: "Do I have to be an elite athlete to join?",
        answer:
            "Not at all. Whether you're just starting or already competing at a high level, we have programs tailored to your goals. Our mission is growth, development, and opportunity.",
    },
    {
        question: "What sports do you offer training for?",
        answer:
            "Our primary focus is basketball, but our mentorship, leadership, conditioning, and development programs benefit athletes across multiple sports.",
    },
    {
        question: "Do you offer one-on-one training?",
        answer:
            "Yes. We provide private sessions, small group training, and team development depending on the athlete's goals and availability.",
    },
    {
        question: "What is included in Talent Management?",
        answer:
            "Our Talent Management division helps athletes and artists build their personal brand, connect with opportunities, secure partnerships, and prepare for long-term success.",
    },
    {
        question: "How do I register for a program?",
        answer:
            "Simply choose a membership or training package, complete the registration form, and our team will contact you with the next steps.",
    },
    {
        question: "Do you partner with schools and organizations?",
        answer:
            "Absolutely. We actively collaborate with schools, community organizations, nonprofits, and businesses to create meaningful opportunities for youth.",
    },
    {
        question: "How can I support Favored Future?",
        answer:
            "You can support our mission by becoming a partner, sponsoring a program, volunteering, donating, or helping us connect with young people who can benefit from our services.",
    },
];

export default function FAQs() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            id="faqs"
            className="relative overflow-hidden bg-neutral-950 py-28 text-white"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#404040_0%,transparent_60%)] opacity-30" />

            <div className="relative mx-auto max-w-5xl px-6">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <span className="uppercase tracking-[0.4em] text-white/50">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-5xl font-black md:text-7xl">
                        Have Questions?
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
                        Everything you need to know about our programs, memberships,
                        partnerships, and how to become part of the Favored Future family.
                    </p>
                </motion.div>

                {/* Accordion */}

                <div className="mt-20 space-y-5">
                    {faqs.map((faq, index) => {
                        const active = open === index;

                        return (
                            <motion.div
                                key={faq.question}
                                layout
                                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                            >
                                <button
                                    onClick={() =>
                                        setOpen(active ? null : index)
                                    }
                                    className="flex w-full items-center justify-between p-7 text-left"
                                >
                                    <span className="text-xl font-bold">
                                        {faq.question}
                                    </span>

                                    <motion.div
                                        animate={{
                                            rotate: active ? 180 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >
                                        <ChevronDown size={26} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {active && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto",
                                            }}
                                            exit={{
                                                opacity: 0,
                                                height: 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >
                                            <div className="border-t border-white/10 px-7 pb-7 pt-6">
                                                <p className="leading-8 text-white/70">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-10 text-center"
                >
                    <h3 className="text-3xl font-black">
                        Still have questions?
                    </h3>

                    <p className="mx-auto mt-5 max-w-2xl text-white/70">
                        We'd love to help. Reach out to our team and we'll answer any
                        questions about training, memberships, partnerships, or upcoming
                        programs.
                    </p>

                    <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </section>
    );
}