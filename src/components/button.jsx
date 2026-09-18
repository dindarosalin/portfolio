const Button = ({
    children,
    href,
    onClick,
    type = 'button',
    disabled = false,
}) => {
    const className = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        border
        border-border
        bg-surface/80
        px-3
        py-1
        font-body
        text-sm
        font-normal
        text-pink-primary
        shadow-soft
        backdrop-blur-sm
        transition-colors
        duration-300
        ease-in-out
        hover:text-pink-dark
        focus:outline-none
        focus:ring-2
        focus:ring-pink-primary
        disabled:cursor-not-allowed
        disabled:opacity-50
    `

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={className}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button