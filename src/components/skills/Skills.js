import "./skills.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import {SkillData} from "./SkillData";

function Skills() {
    
    const skills=[
        {name:"React",   img:"https://www.svgrepo.com/show/327388/logo-react.svg"},
        {name:"Angular", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"},
        {name:"ASP.NET", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"},
        {name:"NodeJS",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"},
        {name:"HTML", img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"},
        {name:"CSS", img:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"},
        {name:"JS", img:"https://i.ibb.co/kcPnKL1/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-softw.png"},
        {name:"SQL",img:"https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"},
        {name:"MongoDB", img:"https://i.ibb.co/d6t45yF/mongologo-removebg-preview.png"},
    ]
    
    return (
        <div id="skills">
            <h2 className="title-skills">Habilidades:</h2>
            <br/>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {
                    skills.map((s,i)=>(
                        <SwiperSlide><SkillData name={s.name} img={s.img}/></SwiperSlide>
                    ))
                }
                
                
            </Swiper>
        </div>
    );
}

export {Skills};