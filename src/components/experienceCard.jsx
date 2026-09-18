const ExperienceCard = ({
    experience,
    reverse = false,
    isLast = false,
}) => {

    const formatDuration = () => {
        const startDate = experience.start_date
            ? new Date(experience.start_date)
            : null

        const endDate = experience.is_current
            ? null
            : experience.end_date
                ? new Date(experience.end_date)
                : null

        const formatDate = (date) => {
            if (!date) return 'Present'

            return date.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
            })
        }

        if (!startDate) {
            return ''
        }

        return `${formatDate(startDate)} - ${formatDate(endDate)}`
    }

    return (
        <div className="relative">

            {/* Desktop Timeline */}
            <div
                className="
                    hidden
                    sm:block
                    absolute
                    left-1/2
                    top-0
                    bottom-0
                    w-px
                    -translate-x-1/2
                    bg-border
                    border-2
                    border-pink-dark
                "
            >
                {/* Dot */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-0
                        z-10
                        h-4
                        w-4
                        -translate-x-1/2
                        rounded-full
                        border-2
                        border-pink-dark
                        bg-pink-primary
                    "
                />
            </div>

            {/* Desktop Content */}
            <div
                className="
                    hidden
                    sm:grid
                    sm:grid-cols-9
                    gap-6
                "
            >
                <div
                    className={`
                        sm:col-span-4
                        pb-10
                        ${
                            reverse
                                ? 'sm:col-start-6 text-start'
                                : 'sm:col-start-1 text-end'
                        }
                    `}
                >
                    <h3
                        className="
                            font-heading
                            text-3xl
                            font-bold
                            leading-tight
                            text-pink-dark
                        "
                    >
                        {experience.position}
                    </h3>

                    <p
                        className="
                            mt-1
                            font-body
                            text-xl
                            font-medium
                            text-text
                        "
                    >
                        {experience.company}
                    </p>

                    <div
                        className={`
                            mt-3
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            ${
                                reverse
                                    ? 'justify-start'
                                    : 'justify-end'
                            }
                        `}
                    >
                        {experience.employment_type && (
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-border
                                    bg-pink-light
                                    px-2.5
                                    py-1
                                    text-[11px]
                                    font-normal
                                    leading-none
                                    text-text
                                "
                            >
                                {experience.employment_type}
                            </span>
                        )}

                        {formatDuration() && (
                            <span
                                className="
                                    text-sm
                                    italic
                                    font-light
                                    text-muted
                                "
                            >
                                {formatDuration()}
                            </span>
                        )}
                    </div>

                    {experience.description && (
                        <p
                            className="
                                mt-4
                                font-body
                                text-sm
                                leading-relaxed
                                text-text
                            "
                        >
                            {experience.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Mobile Content */}
            <div className="relative flex gap-4 sm:hidden">

                {/* Mobile Timeline */}
                <div className="flex flex-col items-center">
                    <div
                        className="
                            z-10
                            mt-1
                            h-4
                            w-4
                            shrink-0
                            rounded-full
                            border-2
                            border-pink-dark
                            bg-pink-primary
                        "
                    />

                    {!isLast && (
                        <div className="w-px flex-1 bg-border" />
                    )}
                </div>

                {/* Experience Content */}
                <div className="flex-1 pb-10">

                    <h3
                        className="
                            font-heading
                            text-2xl
                            font-bold
                            leading-tight
                            text-pink-dark
                        "
                    >
                        {experience.position}
                    </h3>

                    <p
                        className="
                            mt-1
                            font-body
                            text-lg
                            font-medium
                            text-text
                        "
                    >
                        {experience.company}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">

                        {experience.employment_type && (
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-border
                                    bg-pink-light
                                    px-2.5
                                    py-1
                                    text-[11px]
                                    font-normal
                                    leading-none
                                    text-text
                                "
                            >
                                {experience.employment_type}
                            </span>
                        )}

                        {formatDuration() && (
                            <span
                                className="
                                    text-sm
                                    italic
                                    font-light
                                    text-muted
                                "
                            >
                                {formatDuration()}
                            </span>
                        )}

                    </div>

                    {experience.description && (
                        <p
                            className="
                                mt-3
                                font-body
                                text-sm
                                leading-relaxed
                                text-text
                            "
                        >
                            {experience.description}
                        </p>
                    )}

                </div>
            </div>

        </div>
    )
}

export default ExperienceCard