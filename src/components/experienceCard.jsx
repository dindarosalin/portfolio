const employmentTypeColors = {
    Internship:
        'bg-purple-100 text-purple-700 border-purple-300',

    'Part-time':
        'bg-blue-100 text-blue-700 border-blue-300',

    'Full-time':
        'bg-green-100 text-green-700 border-green-300',

    Freelance:
        'bg-yellow-100 text-yellow-700 border-yellow-300',
}

const ExperienceCard = ({ experience, reverse = false }) => {

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

    const employmentTypeClass =
        employmentTypeColors[experience.employment_type] ||
        'bg-gray-100 text-gray-700 border-gray-300'

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-9 gap-6">

            {/* Timeline */}
            <div className="hidden sm:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-pink-darker bg-white z-10" />

                <div className="w-px h-full bg-red-dark/30" />
            </div>


            {/* LEFT SIDE */}
            <div
                className={`
                    sm:col-span-4
                    ${reverse
                        ? 'sm:col-start-6 sm:text-start'
                        : 'sm:col-start-1 sm:text-end'
                    }
                `}
            >
                <div className="pb-10">

                    {/* Position */}
                    <h3 className="playfair-display font-bold text-3xl leading-tight text-pink-primary">
                        {experience.position}
                    </h3>

                    {/* Company */}
                    <p className="mt-1 font-medium text-xl source-sans text-red-dark dark:text-white">
                        {experience.company}
                    </p>

                    {/* Badge + Duration */}
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
                                className={`
                                    inline-block
                                    rounded-full
                                    border
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    ${employmentTypeClass}
                                `}
                            >
                                {experience.employment_type}
                            </span>
                        )}

                        {formatDuration() && (
                            <span className="text-sm italic font-light">
                                {formatDuration()}
                            </span>
                        )}

                    </div>

                    {/* Description */}
                    {experience.description && (
                        <p className="mt-4 text-md source-sans leading-relaxed">
                            {experience.description}
                        </p>
                    )}

                </div>
            </div>


            {/* RIGHT SIDE */}
            <div
                className={`
                    hidden sm:block
                    sm:col-span-4
                    ${
                        reverse
                            ? 'sm:col-start-1 sm:row-start-1'
                            : 'sm:col-start-6'
                    }
                `}
            />
            

            {/* MOBILE */}
            <div className="sm:hidden relative flex gap-4">

                {/* Mobile Timeline */}
                <div className="flex flex-col items-center">
                    <div className="w-3 h-3 mt-2 rounded-full border-2 border-pink-darker bg-white shrink-0 z-10" />

                    <div className="w-px flex-1 bg-red-dark/30" />
                </div>

                {/* Mobile Content */}
                <div className="pb-10">

                    <h3 className="playfair-display font-bold text-2xl leading-tight text-pink-primary">
                        {experience.position}
                    </h3>

                    <p className="mt-1 font-medium text-lg source-sans text-red-dark dark:text-white">
                        {experience.company}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">

                        {experience.employment_type && (
                            <span
                                className={`
                                    inline-block
                                    rounded-full
                                    border
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    ${employmentTypeClass}
                                `}
                            >
                                {experience.employment_type}
                            </span>
                        )}

                        {formatDuration() && (
                            <span className="text-sm italic font-light">
                                {formatDuration()}
                            </span>
                        )}

                    </div>

                    {experience.description && (
                        <p className="mt-3 text-md source-sans leading-relaxed">
                            {experience.description}
                        </p>
                    )}

                </div>

            </div>

        </div>
    )
}

export default ExperienceCard