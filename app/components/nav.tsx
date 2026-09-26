"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Menu,
    X,
    Phone,
    Mail,
    LogIn,
    Heart,
} from "lucide-react";
import { useState } from "react";

const links = [
    { href: "#about", label: "About" },

    { href: "#programs", label: "Programs" },
    { href: "#events", label: "Events" },

    { href: "#faqs", label: "FAQs" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="relative h-20 w-48 shrink-0"
                >
                    <Image
                        src="/logo.png"
                        alt="Favored Future"
                        fill
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">

                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="group relative text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors"
                        >
                            {link.label}

                            <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    <div className="mx-1 h-8 w-px bg-neutral-300" />

                    {/* Phone */}
                    <Link
                        href="tel:+17185551234"
                        className="rounded-full p-2 transition hover:bg-neutral-100"
                        aria-label="Call Us"
                    >
                        <Phone className="h-5 w-5" />
                    </Link>

                    {/* Email */}
                    <Link
                        href="mailto:info@favoredfuture.org"
                        className="rounded-full p-2 transition hover:bg-neutral-100"
                        aria-label="Email Us"
                    >
                        <Mail className="h-5 w-5" />
                    </Link>

                    <div className="mx-1 h-8 w-px bg-neutral-300" />

                    {/* Login */}
                    <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold transition hover:border-black hover:bg-neutral-50"
                    >
                        <LogIn className="h-4 w-4" />
                        Login
                    </Link>

                    {/* Donate */}
                    <Link
                        href="/donate"
                        className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                        <Heart className="h-4 w-4 fill-white" />
                        Donate
                    </Link>

                </nav>

                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-full p-2 transition hover:bg-neutral-100 lg:hidden"
                    aria-label="Toggle navigation"
                >
                    {open ? (
                        <X className="h-7 w-7" />
                    ) : (
                        <Menu className="h-7 w-7" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-[900px]" : "max-h-0"
                    }`}
            >
                <nav className="border-t border-black/5 bg-white px-6 py-8 shadow-xl">

                    <div className="flex flex-col gap-6">

                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="group relative w-fit text-lg font-semibold uppercase tracking-wide text-black"
                            >
                                {link.label}

                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        {/* Phone + Email */}

                        <div className="mt-4 flex gap-4">

                            <Link
                                href="tel:+17185551234"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-300 py-3 font-semibold transition hover:bg-neutral-100"
                            >
                                <Phone className="h-5 w-5" />
                                Call
                            </Link>

                            <Link
                                href="mailto:info@favoredfuture.org"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-neutral-300 py-3 font-semibold transition hover:bg-neutral-100"
                            >
                                <Mail className="h-5 w-5" />
                                Email
                            </Link>

                        </div>

                        {/* Login */}

                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-black py-4 font-semibold transition hover:bg-neutral-100"
                        >
                            <LogIn className="h-5 w-5" />
                            Login
                        </Link>

                        {/* Donate */}

                        <Link
                            href="/donate"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-neutral-800"
                        >
                            <Heart className="h-5 w-5 fill-white" />
                            Donate
                        </Link>

                    </div>

                </nav>
            </div>
        </header>
    );
}