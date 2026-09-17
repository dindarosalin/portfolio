import { useEffect, useState } from 'react'
import 'swiper/css'
import { getExperiences } from '../../services/experienceServices'

const Experiences = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadExperiences() {
      try {
        const data = await getExperiences()

        setExperiences(data)

        console.log('💼 Experiences dari Supabase:', data)
      } catch (err) {
        console.error('❌ Gagal mengambil experiences:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadExperiences()
  }, [])

  const formatDuration = (experience) => {
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

  const experiencesDescending = [...experiences].sort(
    (a, b) => b.id - a.id
  )

  if (loading) {
    return (
      <section id="experiences" className="my-7 container pt-16">
        <p className="text-center">Loading experiences...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id="experiences" className="my-7 container pt-16">
        <p className="text-center">Failed to load experiences.</p>
      </section>
    )
  }

  return (
    <section id="experiences" className="my-7 container pt-16">
      <div>
        <article className="text-center">
          <p className="font-medium text-xl source-sans text-red-dark dark:text-white">
            Experiences
          </p>

          <h1 className="playfair-display font-bold text-3xl text-center text-pink-primary">
            My Experiences
          </h1>

          <div className="flex justify-center">
            <p className="w-full md:w-1/2 text-md justify-center">
              Here are some of my most recent internship and work experiences.
            </p>
          </div>
        </article>

        <div className="mt-8">
          {experiencesDescending.map((experience, index) => (
            <div
              key={experience.id}
              className={`grid grid-cols-1 sm:grid-cols-5 text-${
                index % 2 === 0 ? 'end' : 'start'
              } gap-6 mt-6 place-items-center sm:place-items-${
                index % 2 === 0 ? 'end' : 'start'
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="sm:col-span-3 order-2 sm:order-1 md:text-end">
                    <p className="font-medium text-xl source-sans text-red-dark dark:text-white">
                      {experience.position}
                    </p>

                    <p className="playfair-display font-bold text-2xl text-pink-primary">
                      {experience.company}
                    </p>

                    <p className="font-medium mt-1">
                      {experience.employment_type}{' '}
                      <span className="italic font-light">
                        {formatDuration(experience)}
                      </span>
                    </p>

                    <p className="text-md source-sans">
                      {experience.description}
                    </p>
                  </div>

                  <div className="sm:col-span-2 order-1 sm:order-2">
                    <div className="rounded-lg h-32 md:h-52 w-full sm:w-auto flex items-center justify-center border">
                      {experience.company}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="sm:col-span-2 order-1 sm:order-1">
                    <div className="rounded-lg h-32 md:h-52 w-full sm:w-auto flex items-center justify-center border">
                      {experience.company}
                    </div>
                  </div>

                  <div className="sm:col-span-3 order-2 sm:order-2 text-center md:text-start">
                    <p className="font-medium text-xl source-sans text-red-dark dark:text-white">
                      {experience.position}
                    </p>

                    <p className="playfair-display font-bold text-2xl md:text-start text-pink-primary">
                      {experience.company}
                    </p>

                    <p className="font-medium mt-1">
                      {experience.employment_type}{' '}
                      <span className="italic font-light">
                        {formatDuration(experience)}
                      </span>
                    </p>

                    <p className="text-md source-sans">
                      {experience.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences