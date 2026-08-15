import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/#" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/#" },
        { label: "Skills", href: "/#" },
        { label: "FAQ", href: "#" },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="navbar">
                <div className="navbar__inner">

                    <Link
                        href="/"
                        className="navbar__logo"
                        onClick={closeMenu}
                    >
                        Alex<span>.</span>
                    </Link>

                    <button
                        type="button"
                        className={`navbar__toggle ${
                            isOpen ? "is-open" : ""
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={
                            isOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                        aria-expanded={isOpen}
                    >
                        <span />
                        <span />
                    </button>

                </div>
            </header>


            <div
                className={`navbar-menu ${
                    isOpen ? "is-open" : ""
                }`}
            >

                <div
                    className="navbar-menu__backdrop"
                    onClick={closeMenu}
                />

                <div className="navbar-menu__panel">

                    <div className="navbar-menu__links">

                        {links.map((link, index) => {

                            const isActive = url === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className={`navbar-menu__link ${
                                        isActive ? "is-active" : ""
                                    }`}
                                >
                                    <span className="navbar-menu__number">
                                        0{index + 1}
                                    </span>

                                    <span className="navbar-menu__label">
                                        {link.label}
                                    </span>

                                    <span className="navbar-menu__arrow">
                                        ↗
                                    </span>
                                </Link>
                            );
                        })}

                    </div>

                </div>
            </div>
        </>
    );
}