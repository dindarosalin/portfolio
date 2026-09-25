const SkillTag = ({ name }) => {
    return (
        <span
            className="
                inline-flex
                items-center
                rounded-full
                border
                border-surface/20
                bg-surface
                px-3
                py-1.5
                font-body
                text-xs
                font-medium
                text-pink-dark
                shadow-soft
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-md
                sm:text-sm
            "
        >
            {name}
        </span>
    )
}

export default SkillTag