import React, { useState } from 'react';
import './Resume.css';
import ProgressBar from "@ramonak/react-progress-bar";
import {GiShuttlecock} from 'react-icons/gi';



const Resume = () => {
    //    const state=useState();
    const [edubool, setedubool] = useState(true);
    const [workbool, setworkbool] = useState(false);
    const [skilbool, setskilbool] = useState(false);
    const [intbool, setintbool] = useState(false);

    const education = () => {
        // console.log("clicked");
        setedubool(true);
        setworkbool(false);
        setskilbool(false);
        setintbool(false)

    }
    const work = () => {
        setedubool(false);
        setworkbool(true);
        setskilbool(false);
        setintbool(false)
    }
    const skill = () => {
        setedubool(false);
        setworkbool(false);
        setskilbool(true);
        setintbool(false)
    }
    const interest = () => {
        setedubool(false);
        setworkbool(false);
        setskilbool(false);
        setintbool(true)
    }

    return (
        <>
            <h1 id='resume_head' className="text-center mt-5 "><span className="abt_head">Resume</span></h1>
            <section id='Resume' className="d-flex align-items-center justify-content-center ">
                <div className="container-fluid nav_bg ">
                    <div className="row mx-auto">
                        <div className="col-11 mx-auto profile_cont">
                            <div className='row resume_box' >

                                <div className='mt-4 col-lg-4 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                    <div className='resume_left'>
                                        <button onClick={education} style={edubool ? {color: "white" , backgroundColor: "#f58766"} : { color:'black'} }><div className='resume_topic' ><i class="fa-sharp fa-solid fa-user-graduate"></i>  &nbsp; Education</div></button>
                                        <button onClick={work} style={workbool ? {color: "white" , backgroundColor: "#f58766"} : { color:'black'} }><div className='resume_topic' ><i class="fa-solid fa-business-time"></i> &nbsp; Work History</div></button>
                                        <button onClick={skill} style={skilbool ? {color: "white" , backgroundColor: "#f58766"} : { color:'black'} }><div className='resume_topic' ><i class="fas fa-laptop-code"></i> &nbsp; Programming Skills</div></button>
                                        <button onClick={interest} style={intbool ? {color: "white" , backgroundColor: "#f58766"} : { color:'black'} }><div className='resume_topic' ><i class="fas fa-palette"></i> &nbsp; interest</div></button>
                                    </div>
                                </div>
                                <div className='mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                    <div className='resume_right'>
                                        {edubool && <div>
                                            <h1><i class="fas fa-graduation-cap"></i> MMMUT, Gorakhpur</h1>
                                            <p>Bachler of Computer of Computer Science and Engineering </p>
                                            <h1><i class="fas fa-graduation-cap"></i> LPS, South City</h1>
                                            <p>i have comleted my intermideate from Lucknow Public School in which i score 86.6% </p>
                                            <h1><i class="fas fa-graduation-cap"></i> LPS, South City</h1>
                                            <p>i have comleted my High School from Lucknow Public School in which i score 8.2 CGPA </p>
                                        </div>
                                        }
                                        {workbool && <div>
                                            <h1>🔴 Oasis infobyte</h1>
                                            <p>OASIS INFOBYTE offers a variety of website design and development services.</p>
                                            <p> I have completed one month internship on Oasis Infobyte </p>
                                            <p>I work there as a Frontend Web Developer.</p>
                                            
                                            <p>I stretch my mind, mental capacity to develop Ui as per the given design </p>
                                        </div>}

                                        {skilbool && <div>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp; React Js</h1>
                                            <p><ProgressBar completed={80} /></p>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp; JavaScript</h1>
                                            <p><ProgressBar completed={80} /></p>
                                            {/* <h1>Node js</h1>
                                            <p><ProgressBar completed={60} /> </p> */}
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp; Express js</h1>
                                            <p><ProgressBar completed={70} /> </p>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp; MongoDB</h1>
                                            <p><ProgressBar completed={60} /> </p>
                                            
                                        </div>
                                        }

                                        {intbool && <div>
                                            <h1><GiShuttlecock/>Badminton</h1>
                                            <p>I like Play Badminton on my free it is good for health</p>
                                            <h1><i class="fa-solid fa-chess"></i> Chess</h1>
                                            <p>Got 800+ rating on chess.com</p>
                                            <h1><i class="fas fa-futbol"></i> Football</h1>
                                            <p>I like Play Football on my free it is good for health</p>
                                        </div>}
                                    </div>
                                </div>
                                {/* <div className='col-lg-4 col-12 mx-auto  order-1 order-lg-2 header-img d-flex flex-column justify-content-center'>
                          <div className='resume_right'>
                                <h1>sndsakn</h1>
                          </div>
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
    )
}

export default Resume;