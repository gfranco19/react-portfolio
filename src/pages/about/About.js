import React from "react";
import "./About.css";
import Container from "../../component/container/Container"
import ProfilePic from "../../assets/img/Head_shot.jpg";
function About () {
    return (
        <div>
            <Container 
            pageName ="About Me" 
            imgSrc = {ProfilePic}
            imgName = "headShot"
            details = "  Giovanny Franco is an aspiring entrepreneur, with experience managing self-made applications and team web apps. His background in visual design, and web design inform him mindful but competitive in approach. Giovanny is fueled by his passion for understanding the vas market of trendiness and his knowledge in sociology gives him an understanding of cross-culture appropriations. He considers himself a ‘forever student,’ eager to both build on his academic foundations in computer programming and sociology and stay in tune with the latest digital marketing strategies through continued coursework. His hunger for knowledge and determination to turn information into action has contributed to his most recent success at the University of Riverside, where he won an academic scholarship for the URC coding bootcamp by obtaining two letters of recommendations from former programming professors. Nonetheless, he is more than halfway through the course and will implement the standards learned to ensure a clean structure in his work. Giovanny believes mindfulness in the workplace is key to success. In practice he lives out through his interests in painting, graphic design, photography, and web design. Giovanny is currently working as a freelance web application creator and is always interested in a challenge."

            />
        </div>
      
    );
}

export default About;