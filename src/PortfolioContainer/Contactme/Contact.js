import React from "react";
import './Contact.css'

const Contact=()=>{
    return(
        <>
        <h1 id="contact" className="text-center mt-5 "><span className="abt_head">Get In Touch</span></h1>
           
                            
                            <section className="contact-sec sec-pad">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title"> Contact us</h1>

          <ul className="contact-ul">
            <li><i className="fa fa-location-dot"></i>A-Block South City, Lucknow</li>

            <li>
              <i className="fa fa-phone"></i>
              <a href="tel:869661997"><b>8696616997</b></a>,
              {/* <a href="tel:08510005495"><b>0251600XXXX</b></a> */}
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:vishu100zoro@gmail.com"><b>vishu100zoro@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="https://www.linkedin.com/in/vishal-singh-32b213244/" target="_blank" className="fb"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/vishal-singh-32b213244/" target="_blank" className="insta"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/vishal-singh-32b213244/" target="_blank" className="twitter"><i className="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div className="col-md-6">
        <form action="#" className="contFrm" method="POST">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
            </div>

            <div className="col-12">
              <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div className="col-12">
              <input type="submit" name="submit" value="SUBMIT" className="inptBtn" />
            </div>
          </div>
        </form>
      </div>
    </div>

    <div style={{textAlign: "center" , marginTop: "20px", color:"white"}}>
      <p> Copyright &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        All rights reserved | Vishu100
      </p>
    </div>

  </div>
</section>
                     
        </>
    );
}

export default Contact;