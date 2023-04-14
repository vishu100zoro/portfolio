import React from "react";
import './Project.css'

const Project = () => {
    return (
        <>
            <h1 id="project" className="text-center mt-5 "><span className="abt_head">Project</span></h1>
            <section id='resume' className="d-flex align-items-center justify-content-center ">
                <div className="container-fluid nav_bg ">
                    <div className="row mx-auto">
                        <div className="col-10 mx-auto profile_cont">
                            <div className='row text-center' >
                                
                            

   
   <div className="content">
     
      <div className="card" >
         <a href="https://vishu100zoro.github.io/vishu100/">
            <div className="icon">
            {/* <i class="material-icons md-36">face</i> */}
            <i class="material-icons md-36">home</i>

            {/* <i class="md-36 fa-solid fa-xl fa-house"></i> */}
            {/* <i class="fa-regular fa-sun-cloud"></i> */}
            </div>
            <p className="title">Animation website</p>
            <p className="text">Click to see my animation website page, it built using react.</p>
            </a>
      </div>
     
      <div className="card">
      <a href="https://weatherproject-vishu100zoro.onrender.com">
            <div className="icon">
            {/* <i class="material-icons md-36">favorite_border</i> */}
            <i class="material-icons md-36">cloud</i>
            </div>
            <p className="title">Weather App</p>
            <p className="text">It show real time weather information of any city you enter</p>
         </a>
      </div>
     
      <div className="card">
      <a href="https://zesty-donut-2bdcd6.netlify.app/index.html">
            <div className="icon">
            {/* <i class="material-icons md-36">alternate_email</i> */}
            <i class="material-icons md-36">screen_share</i>
            </div>
            <p className="title">Blogging website</p>
            <p className="text">It fully responsive website which is build using HTML CSS JS</p>
            </a>
      </div>
     
   

   
   </div>

                                {/* <div className='mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                          
                        </div>
                          <div className='col-lg-6 col-12 mx-auto  order-1 order-lg-2 header-img d-flex justify-content-center align-items-center'>
                          
                        </div> */}

                                {/* <div className=' mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                
                                
                            </div>
                            <div className='col-lg-6 col-12 mx-auto  order-1 order-lg-2 header-img d-flex justify-content-center align-items-center'>
                               
                            </div> */}
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
        </>
    );
}

export default Project;