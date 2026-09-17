import { useEffect, useState } from 'react'
import { getProfile } from '../../services/profileServices'
import { getEducation } from '../../services/educationServices'

const About = () => {
  const [profile, setProfile] = useState(null)
  const [education, setEducation] = useState([])
  const [error, setError] = useState(null)
  const [educationError, setEducationError] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (err) {
        console.error('Failed to load profile:', err)
        setError(err.message)
      }
    }

    loadProfile()
  }, [])

  useEffect(() => {
    async function loadEducation() {
      try {
        const data = await getEducation()
        setEducation(data)

        console.log('🎓 Education dari About:', data)
      } catch (err) {
        console.error('Failed to load education:', err)
        setEducationError(err.message)
      }
    }

    loadEducation()
  }, [])

  if (error) {
    return (
      <section id="about" className="pt-16 container">
        <p>Failed to load profile.</p>
      </section>
    )
  }

  if (!profile) {
    return (
      <section id="about" className="pt-16 container">
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section id="about" className="pt-16 container">
      <div className="flex flex-col md:flex-row place-items-center justify-between">
        
        {/* About */}
        <div className="md:w-1/2 me-6">
          <h4 className="text-start playfair-display text-h4 font-bold my-heading leading-h4">
            Hi, I am {profile.name},
          </h4>

          <p className="my-5 text-lg text-start source-sans">
            {profile.bio}
          </p>
        </div>

        {/* Profile & Education */}
        <div className="md:w-1/2">

          {/* Profile */}
          <table className="text-start table-auto border-separate border-spacing-2 border border-2 border-red-dark dark:border-pink-darker rounded-md w-full">
            <caption className="caption-top font-bold uppercase">
              Profile
            </caption>

            <tbody>
              <tr className="shadow-sm">
                <th className="text-start font-medium">Headline:</th>
                <td>{profile.headline}</td>
              </tr>

              <tr className="shadow-sm">
                <th className="text-start font-medium">Location:</th>
                <td>{profile.location}</td>
              </tr>

              <tr className="shadow-sm">
                <th className="text-start font-medium">Email:</th>
                <td>{profile.email}</td>
              </tr>
            </tbody>
          </table>

          {/* Education */}
          <table className="text-start table-auto border-separate border-spacing-2 border border-2 border-red-dark dark:border-pink-darker rounded-md w-full mt-6">
            <caption className="caption-top font-bold uppercase">
              Education
            </caption>

            <tbody>
              {educationError ? (
                <tr>
                  <td colSpan="2">
                    Failed to load education.
                  </td>
                </tr>
              ) : education.length === 0 ? (
                <tr>
                  <td colSpan="2">
                    No education data available.
                  </td>
                </tr>
              ) : (
                education.map((item) => (
                  <tr className="shadow-sm" key={item.id}>
                    <th className="text-start font-medium">
                      University:
                    </th>
                    <td>{item.institution}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  )
}

export default About