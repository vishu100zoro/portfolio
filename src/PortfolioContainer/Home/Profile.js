import React from "react";
import Typical from "react-typical";
import './Profile.css'

const Profile = () => {
    return (

        <section id='header' className="d-flex align-items-center justify-content-center ">
            <div className="container-fluid nav_bg ">
                <div className="row mx-auto">
                    <div className="col-10 mx-auto profile_cont">
                        <div className='row text-center mx-auto' >
                            <div className=' mt-4 col-lg-6 col-12 mx-auto pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                                <div className="colzicon mb-3">

                                    <a href="https://www.facebook.com/profile.php?id=100008849561440">
                                        <i class="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="https://www.youtube.com/">
                                        <i className="fa-brands fa-square-google-plus"></i>
                                    </a>
                                    <a href="https://instagram.com/vishalsingh968?igshid=ZDdkNTZiNTM=">
                                        <i className="fa-brands fa-square-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vishal-singh-32b213244/">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.youtube.com/">
                                        <i className="fa-brands fa-square-youtube"></i>
                                    </a>
                                </div>
                                <div className="profile-details-name mb-2">
                                    <span className="primary-text">
                                        {""}
                                        Hello, I'M <span className="highlight-text"> Vishal Singh</span>
                                    </span>
                                </div>
                                <div className="profile-details-role mb-3">
                                    <span className="primary-text">
                                        {""}
                                        <h1>
                                            {""}
                                            <Typical
                                                steps={['Ethusiastic Dev', 2000, 'Full Stack Dev', 2000, 'Software Dev', 2000, 'Reactjs Dev', 2000]}
                                                loop={Infinity}
                                                wrapper="p"
                                            />
                                        </h1>
                                        <span className="profile-role-tagline">
                                            knack of building application with front and back end
                                        </span>
                                    </span>

                                </div>
                                <div className="profile-options">
                                    <button className="btn primary-btn">
                                    <a href="https://www.linkedin.com/in/vishal-singh-32b213244/">
                                        Hire Me
                                        </a>
                                    </button>
                                    <a href="resume.pdf" download='vishal resume.pdf'>
                                        <button className="btn resumebtn">
                                            Get resume
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className='col-lg-6 col-12 mx-auto  order-1 order-lg-2 header-img d-flex justify-content-center align-items-center'>
                               <div className="img_cont">
                                <div className="profile_img">
                                {/* <img src="./profile.jpg" className='img-fluid animated' alt='image1' /> */}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div className="profile-container">
        //     <div className="profile-parent">
        //         <div className="profile-details">
        //             <div className="colz">
        //             <div className="colz-icon">

        //                 <a href="https://www.youtube.com/">
        //                     <i class="fa-brands fa-square-facebook"></i>
        //                 </a>
        //                 <a href="https://www.youtube.com/">
        //                     <i className="fa-brands fa-square-google-plus"></i>
        //                 </a>
        //                 <a href="https://www.youtube.com/">
        //                     <i className="fa-brands fa-square-instagram"></i>
        //                 </a>
        //                 <a href="https://www.youtube.com/">
        //                     <i class="fa-brands fa-linkedin"></i>
        //                 </a>
        //                 <a href="https://www.youtube.com/">
        //                     <i className="fa-brands fa-square-youtube"></i>
        //                 </a>
        //             </div>
        //             </div>
        //             <div className="profile-details-name">
        //                 <span className="primary-text">
        //                     {""}
        //                     hello, I'M<span className="highlight-text">Vishal</span>
        //                 </span>
        //             </div>
        //             <div className="profile-details-role">
        //                 <span className="primary-text">
        //                     {""}
        //                     <h1>
        //                         {""}
        //                         <Typical
        //                             steps={['Ethusiastic Dev', 2000, 'Full Stack Dev', 2000, 'Software Dev', 2000, 'Reactjs Dev', 2000]}
        //                             loop={Infinity}
        //                             wrapper="p"
        //                         />
        //                     </h1>
        //                     <span className="profile-role-tagline">
        //                         knack of building application with front and back end
        //                     </span>
        //                 </span>

        //             </div>
        //             <div className="profile-options">
        //                 <button className="btn primary-btn">
        //                     Hire Me
        //                 </button>
        //                 <a href="resume.pdf" download='vishal resume.pdf'>
        //                     <button className="btn highlighted-btn">
        //                        Get resume
        //                     </button>
        //                 </a>
        //             </div>
        //         </div>
        //         <div className="profile-picture">
        //             <div className="profile-picture-bg">

        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Profile;