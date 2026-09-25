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
                min-h-[130px]
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
                sm:min-h-[145px]
                sm:p-4
                lg:min-h-[155px]
            "
        >
            <p
                className="
                    font-heading
                    text-3xl
                    font-bold
                    leading-none
                    text-pink-dark
                    sm:text-4xl
                "
            >
                {number}
            </p>

            <h3
                className="
                    mt-2
                    break-words
                    font-heading
                    text-sm
                    font-bold
                    leading-tight
                    text-text
                    sm:text-base
                "
            >
                {label}
            </h3>

            {description && (
                <p
                    className="
                        mt-1.5
                        break-words
                        text-[10px]
                        leading-tight
                        text-muted
                        sm:text-xs
                    "
                >
                    {description}
                </p>
            )}
        </div>
    )
}

export default StatCard