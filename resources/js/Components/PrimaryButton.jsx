import { Link } from "@inertiajs/react";

export default function PrimaryButton({
    children,
    href,
    className = "",
    showArrow = true,
}) {
    const classes = `primary-button ${className}`.trim();

    /*
     * Internal Laravel/Inertia route
     */
    if (href?.startsWith("/")) {
        return (
            <Link
                href={href}
                className={classes}
            >
                <span className="primary-button__text">
                    {children}
                </span>

                {showArrow && (
                    <span className="primary-button__arrow">
                        ↗
                    </span>
                )}
            </Link>
        );
    }

    /*
     * External link
     */
    return (
        <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="primary-button__text">
                {children}
            </span>

            {showArrow && (
                <span className="primary-button__arrow">
                    ↗
                </span>
            )}
        </a>
    );
}