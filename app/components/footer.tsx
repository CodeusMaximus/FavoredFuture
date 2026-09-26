"use client";

import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black text-white">

            {/* Background Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#404040_0%,transparent_55%)] opacity-30" />

            <div className="relative mx-auto max-w-7xl px-6 py-24">

                {/* Newsletter */}

                <div className="mb-20 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04]">

                    <div className="grid items-center gap-12 p-10 lg:grid-cols-2">

                        <div>

                            <span className="uppercase tracking-[.35em] text-white/50">
                                Newsletter
                            </span>

                            <h2 className="mt-4 text-4xl font-black md:text-5xl">
                                Stay Connected.
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                                Receive updates on camps, tryouts, tournaments,
                                community events, partnerships, media releases,
                                and exclusive announcements.
                            </p>

                        </div>

                        <form className="flex flex-col gap-4 sm:flex-row">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-white"
                            />

                            <button
                                type="submit"
                                className="group flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
                            >
                                Subscribe

                                <ArrowRight className="ml-3 transition group-hover:translate-x-1" />

                            </button>

                        </form>

                    </div>

                </div>

                {/* Main Footer */}

                <div className="grid gap-16 lg:grid-cols-5">

                    {/* Logo */}

                    <div className="lg:col-span-2">

                        <h2 className="text-4xl font-black">
                            Favored Future
                        </h2>

                        <p className="mt-6 max-w-md leading-8 text-white/65">
                            Building athletes. Developing leaders. Creating
                            opportunities through sports, education, music,
                            media, leadership, and community partnerships.
                        </p>

                        <div className="mt-8 flex gap-4">

                            {[
                                FaFacebookF,
                                FaInstagram,
                                FaLinkedinIn,
                                FaYoutube,
                            ].map((Icon, i) => (

                                <a
                                    key={i}
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                                >
                                    <Icon />

                                </a>

                            ))}

                        </div>

                    </div>

                    {/* Company */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold">
                            Company
                        </h3>

                        <div className="space-y-4 text-white/60">

                            <Link href="#about" className="block transition hover:text-white">
                                About
                            </Link>

                            <Link href="#services" className="block transition hover:text-white">
                                Services
                            </Link>

                            <Link href="#pricing" className="block transition hover:text-white">
                                Pricing
                            </Link>

                            <Link href="#faqs" className="block transition hover:text-white">
                                FAQs
                            </Link>

                            <Link href="#contact" className="block transition hover:text-white">
                                Contact
                            </Link>

                        </div>

                    </div>

                    {/* Divisions */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold">
                            Divisions
                        </h3>

                        <div className="space-y-4 text-white/60">

                            <a href="#" className="block hover:text-white">
                                Sports Division
                            </a>

                            <a href="#" className="block hover:text-white">
                                Elite AAU
                            </a>

                            <a href="#" className="block hover:text-white">
                                Talent Management
                            </a>

                            <a href="#" className="block hover:text-white">
                                Media Division
                            </a>

                            <a href="#" className="block hover:text-white">
                                Future Mode
                            </a>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-6 text-lg font-bold">
                            Contact
                        </h3>

                        <div className="space-y-5 text-white/70">

                            <div className="flex items-start gap-3">

                                <Phone size={18} />

                                <span>(347) 000-0000</span>

                            </div>

                            <div className="flex items-start gap-3">

                                <Mail size={18} />

                                <span>info@favoredfuture.org</span>

                            </div>

                            <div className="flex items-start gap-3">

                                <MapPin size={18} />

                                <span>
                                    Staten Island
                                    <br />
                                    New York
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-14 h-px bg-white/10" />

                {/* Bottom */}

                <div className="flex flex-col items-center justify-between gap-6 text-sm text-white/45 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Favored Future.
                        All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap gap-8">

                        <Link
                            href="/privacy"
                            className="hover:text-white"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-white"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="/cookies"
                            className="hover:text-white"
                        >
                            Cookie Policy
                        </Link>

                    </div>

                </div>

            </div>
        </footer>
    );
}