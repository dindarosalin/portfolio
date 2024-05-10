const about = () => {
  return (
    <section id="about" className="z-0 place-content-center h-100 container ">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center">
            <div className="md:w-1/2 lg:w-2/3 text-center md:text-start lg:text-start m-3 mt-7">
                <h1 className="text-4xl font-bold uppercase">Dinda Rosalin</h1>
                <h3 className="italic font-medium subtitle mt-3">Software Engineer Student</h3>
                <div className="md:hidden lg:hidden flex justify-center">
                  <img src="src\assets\images\profile.jpeg" alt="Dinda's Profile" className="rounded object-contain h-44 m-3" />
                </div>
                <p className="mt-4 font-light text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu. Eget mauris pharetra et ultrices neque ornare aenean. Ut diam quam nulla porttitor massa. Massa enim nec dui nunc mattis. Amet mattis vulputate enim nulla. </p>
              <div className="mt-3">
                <button className="hover:shadow-lg hover:shadow-gold shadow-md shadow-gold outline outline-1 outline-offset-2 rounded py-2 px-3 mt-4 outline-button">Contact Me</button>
              </div>
            </div>
            <div className="flex justify-end hidden md:inline-block lg:inline-block m-3">
              <img src="src\assets\images\profile.jpeg" alt="Dinda's Profile" className="rounded object-contain h-44 md:h-72 lg:h-72 me-3 m-3" />
            </div>
        </div>
    </section>
  )
}

export default about