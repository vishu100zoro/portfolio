import React from "react";
import './AboutMe.css'

const AboutMe=()=>{
     return (<>
       <h1 id="aboutme" className="text-center mt-5 "><span className="abt_head">About Me</span></h1>
        <section id='about' className="d-flex align-items-center justify-content-center ">
            <div className="container-fluid nav_bg ">
                <div className="row mx-auto">
                    <div className="col-10 mx-auto profile_cont">
                        <div className='row text-center' >
                        
                        <div className='mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                          <div className="card_left">
                            <h2 className="card_title">What i do?</h2>
                            <p className="card_description"><span className="bold_letter">I'm a software developer proficient in React js, CSS, and JavaScript. </span><br/>
                            Passionate about creating stunning, user-friendly web applications and always eager to learn and grow.</p>
                            <a href="#contact" className="card_cta btn resumebtn ">Contact Me</a>
                          </div>
                          </div>
                          <div className='col-lg-6 col-12 mx-auto  order-1 order-lg-2 header-img d-flex justify-content-center align-items-center'>
                          <div className="card_right">
                            <div className="card_group">
                                <h5 className="card_s_no">12+</h5>
                                <span className="card_s_name">Projects</span>
                            </div>
                            <div className="card_group">
                                <h5 className="card_s_no">179+</h5>
                                <span className="card_s_name">Leetcode</span>
                            </div>
                            <div className="card_group">
                                <h5 className="card_s_no">1+</h5>
                                <span className="card_s_name">React js Experience</span>
                            </div>
                            <div className="card_group">
                                <h5 className="card_s_no">89+</h5>
                                <span className="card_s_name">Geeksforgeeks</span>
                            </div>
                          </div>
                        </div>
                        
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

export default AboutMe