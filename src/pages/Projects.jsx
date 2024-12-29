import CorouselIntro from "../components/CorouselIntro"

function Projects() {
  return (<>
  <CorouselIntro/>

  <div className="flex justify-center h-fit text-center">
        <div className="shadow-2xl w-fit -translate-y-1/2 midle-text-container" >
        <div className="p-4 md:p-6 lg:p-8">
  <span className="block text-2xl md:text-6xl lg:text-4xl font-bold myprojects">My project</span>
  <span className="block text-sm md:text-3xl, lg:text-xl text-blue-700">2015-Present
     
  </span>
</div>

        </div>
        </div>
        
      <div className="projects-list grid ">
          <div className="wedding"> wedding</div>
          <div className="kids"> kids</div>
          <div className="nature">nature</div>
      </div>

  </>
  )
}

export default Projects