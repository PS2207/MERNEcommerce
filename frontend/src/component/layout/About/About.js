import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/pragyasinha82";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqv459dx9/image/upload/v1650953877/avatars/kiug46yew93qdanbkckl.jpg"
              alt="Founder"
            />
            <Typography>Pragya Sinha</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @mepragyasinha. Only 
               with the purpose of project to submit in college
            </span>
          </div>
        
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
         
            <a href="https://www.facebook.com/P Sinha" target="blank"  >
              <FacebookIcon className="faceBookSvgIcon"/>
            </a>

            <a href="https://www.whatsapp.com" target="blank">
              <WhatsAppIcon className="whatsAppSvgIcon" />
            </a>

            <a href="https://instagram.com/pragyasinha82" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
