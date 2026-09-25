const StatCard = ({
    number,
    label,
    description,
}) => {
    return (
        <div
            className="
                flex
                min-w-0
                min-h-[140px]
                w-full
                flex-col
                justify-center
                rounded-lg
                border
                border-border
                bg-surface
                p-3
                text-center
                shadow-soft
                transition-all
                duration-300
                sm:min-h-[160px]
                sm:p-4
                lg:min-h-[180px]
                lg:p-6
            "
        >
            <p
                className="
                    min-w-0
                    break-words
                    font-heading
                    text-2xl
                    font-bold
                    leading-none
                    text-pink-dark
                    sm:text-3xl
                    lg:text-4xl
                "
            >
                {number}
            </p>

            <h3
                className="
                    mt-2
                    min-w-0
                    break-words
                    whitespace-normal
                    font-heading
                    text-sm
                    font-bold
                    leading-tight
                    text-text
                    sm:text-base
                    lg:mt-3
                    lg:text-lg
                "
            >
                {label}
            </h3>

            {description && (
                <p
                    className="
                        mt-1
                        min-w-0
                        break-words
                        whitespace-normal
                        leading-tight
                        text-muted
                        sm:mt-2
                        sm:text-xs
                        lg:text-sm
                        lg:leading-relaxed
                    "
                >
                    {description}
                </p>
            )}
        </div>
    )
}

export default StatCard