function HeroSection() {
  return (
    <>
      {/* <div className="main-container px-2 sm:px-18 pt-14 font-white min-h-screen"> */}
        <div className="main-container px-2 sm:px-18 font-white min-h-screen flex items-center justify-center text-center">
        <div className="about-container">
          <div className="name-container">
            <p className="text-normal text-lg sm:text-2xl lg:text-6xl font-bold text-orange-600">
              YASH VARDHAN NAUTIYAL
            </p>
            <div className="text-5xl sm:text-6xl md:text-8xl font-bold">
              <p className="text-white">SOFTWARE <span className="font-color1">DEVELOPER</span></p>
            </div>
          </div>
          <p className="font-color2 pt-2 w-full sm-w-xl md:w-5xl sm:font-medium sm:text-lg">
            <span className="text-white">
              Passionate about creating intuitive and engaging user experiences.
            </span>
            I'm a website developer and designer based in{" "}
            <span className="text-white">India</span>, passionate about
            delivering high-quality websites and applications.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
