const about = () => {
  return (
    <section id="about" className="z-0 place-content-center h-100 container ">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center">
            <div className="md:w-1/2 lg:w-2/3 text-center md:text-start lg:text-start m-3 mt-7">
                <h1 className="text-4xl font-bold uppercase">Dinda Rosalin</h1>
                <h3 className="italic font-medium subtitle mt-3">Software Engineer Student</h3>
                <div className="md:hidden lg:hidden flex justify-center">
                  <img src={"public/profile.jpeg"} alt="Dinda's Profile" className="rounded object-contain h-44 m-3 hover:scale-110 transition cursor-pointer duration-500 ease-in-out" />
                </div>
                <p className="my-5 font-light text-lg">
                  Third year Student at <a href="https://poliwangi.ac.id/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline underline-gold font-medium transition ease-in-out duration-300">Politeknik Negeri Banyuwangi </a>
                  with a focus on Front End and Full Stack Web Development. Passionate about continuous learning and possessing a growth mindset, I am driven to excel in the dynamic field of technology.
                </p>
              <div className="mt-9">
                <a href="https://wa.me/+6282333525346" target="_blank" rel="noopener noreferrer" className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4">Contact Me</a>
              </div>
            </div>
            <div className="flex justify-end hidden md:inline-block lg:inline-block m-3">
              <img src={"public/profile.jpeg"} alt="Dinda's Profile" className="outline outline-offset-2 outline-gold rounded object-contain h-44 md:h-72 lg:h-72 me-3 m-3 hover:scale-110 transition cursor-pointer duration-500 ease-in-out" />
            </div>
        </div>
    </section>
  )
}

export default about