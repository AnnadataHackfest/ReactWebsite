import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';

const About = () => {
  return (
    <div className="about_us">
    <h2>OUR COMPANY</h2>
    <div className="mission">
      <span>MISSION</span>
      <p>Our mission is to tranform the way agriculture happens in our country. </p>
    </div>
    <span>Annadata</span>
    <p>Company’s name comes from the soul of agriculture in India, meaning farmer in english. </p>
    <span>Our Motto</span>
    <p>Our motto is to revolutionize the process of farming right from the start of the season till the harvesting processes.</p>
    <img src="https://images.unsplash.com/photo-1464972377689-e7674c48d806?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="700" alt="" />
    <span>OUR COMMITMENT</span>
    <p>
      Thank you for considering Annadata as your farming partner. We are commited to providing our best services to you. You can reach out to us anytime as you wish.
    </p>
  </div>
  );
}

export default About;