import React, { useState } from "react";
import './Navbar.css';
import $ from 'jquery';
// import classes from './Navbar.module.scss';

const Navbar = () => {
    
       const [active,setactive]=useState(0)
        
       $(document).ready(function () {
        $('.bottom-nav li a').click(function(){
            var position = $(this).position();
            var margin = 37;
            $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
            $('.bottom-nav li a').removeClass('active-icon');
            $(this).addClass('active-icon');
        });
    });
    return (
        <>
            <ul className="bottom-nav">
                <div className="slider homei"></div>
                <li>
                    <a href="#header" onClick={()=>{setactive(0) }} className={active===0?"active-icon":"as"}>
                       
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#aboutme" ref={el => {
                        if (!el) return;
                        console.log(el.getBoundingClientRect().left);
                    }}  onClick={()=>setactive(1)} className={active===1?"active-icon":"as"}>
                         {/* <i className="far fa-user"></i> */}
                         <i class="fa-solid fa-user"></i>
                        <span>About</span>
                    </a>
                </li>
                <li >
                    <a href="#resume_head" onClick={()=>setactive(2)} className={active===2?"active-icon":"as"}>
                        {/* <i className="fab fa-codepen"></i> */}
                        <i class="fa-solid fa-file"></i>
                        <span>Resume</span>
                    </a>
                </li>
                <li >
                    <a href="#project" onClick={()=>setactive(3)} className={active===3?"active-icon":"as"}>
                        {/* <i className="far fa-heart"></i> */}
                        <i class="fa-solid fa-heart"></i>
                        <span>Project</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setactive(4)} className={active===4?"active-icon":"as"}>
                        {/* <i className="fas fa-shopping-cart"></i> */}
                        <i class="fa-solid fa-address-book"></i>
                        <span>Contact</span>
                    </a>
                </li>

            </ul>
        </>
       
    );
}

export default Navbar;