const about = () => {
  return (
    <section id="about" className="pt-16">
      <div className="flex flex-col md:flex-row place-items-center">
        <div className="md:w-1/2 me-6">
          <h4 className="text-start playfair-display text-h4 font-bold my-heading leading-h4">Hi, I am Dinda,</h4>
          <p className="my-5 text-lg text-start source-sans">
            Third year Student at <a href="https://poliwangi.ac.id/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium transition ease-in-out duration-300">Politeknik Negeri Banyuwangi </a>
            with a focus on Front End and Full Stack Web Development. Passionate about continuous learning and possessing a growth mindset, I am driven to excel in the dynamic field of technology.
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="font-bold">EDUCATION</p>
          <div className=" outline rounded-md outline-1 outline-red-dark text-start p-4">
            <table>
              <tr className="shadow-sm">
                <th className="text-start font-medium">University:</th>
                <td>Politeknik Negeri Banyuwangi</td>
              </tr>
              <tr className="shadow-sm">
                <th className="text-start font-medium">Department:</th>
                <td>D4 Teknologi Rekayasa Perangkat Lunak</td>
              </tr>
              <tr className="shadow-sm">
                <th className="text-start font-medium">Grade:</th>
                <td>3.81</td>
              </tr>
              <tr className="shadow-sm">
                <th className="text-start font-medium">Year:</th>
                <td>2021-Now</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about