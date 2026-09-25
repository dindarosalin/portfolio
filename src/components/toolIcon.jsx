const ToolIcon = ({ name, iconUrl }) => {
    return (
        <div
            className="
                group
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-border
                bg-surface
                p-2.5
                shadow-soft
                transition-all
                duration-300
                hover:-translate-y-1
            "
        >
            <img
                src={iconUrl}
                alt={name}
                className="
                    h-full
                    w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-110
                "
            />

            {/* Tooltip */}
            <span
                className="
                    pointer-events-none
                    absolute
                    -top-9
                    left-1/2
                    z-10
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-text
                    px-2
                    py-1
                    text-xs
                    text-surface
                    opacity-0
                    transition-opacity
                    duration-200
                    group-hover:opacity-100
                "
            >
                {name}
            </span>
        </div>
    )
}

export default ToolIcon