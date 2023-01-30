import React from "react";
import "./footer.css";
import { FaPhone, FaMailBulk, FaSearchLocation, FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img7.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img8.jpg";
import img6 from "../../assets/img6.jpg";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="footer__left">
        <p className="font-bold text-lg">ACADEMIA</p>
        <p className="text-slate-300 mb-4">ONLINE EDUCATION & LEARNING</p>
        <p className="mb-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout Contrary to
          popular belief.
        </p>
        <FaFacebook size={25} className="inline-block mr-5 hover:text-sky-900" />
        <FaInstagram size={25} className="inline-block mr-5 hover:text-pink-800" />
        <FaTwitter size={25} className="inline-block mr-5 hover:text-sky-600" />
      </div>
      
      <div className="footer__middle">
        <p className="font-bold text-lg mb-4" >Gallery</p>
        <div className="footer__gallery">
          <img src={img1} alt="education" />
          <img src={img2} alt="education" />
          <img src={img3} alt="education" />
          <img src={img4} alt="education" />
          <img src={img5} alt="education" />
          <img src={img6} alt="education" />
        </div>
      </div>
      
      <div className="footer__right">
      <p className="font-bold text-lg mb-4">Have a Question?</p>
        <div className="pb-2">
          <FaSearchLocation size={20} className="inline-block mr-2" />
          123 Acme St. Houston,Tx
        </div>
        <div className="pb-2">
          <FaPhone size={20} className="inline-block mr-2" />
          1-800-123-1234
        </div>
        <div className="pb-2">
          <FaMailBulk size={20} className="inline-block mr-2" />
          info@yourdomain.com
        </div>
      </div>

     
    </div>
  );
};

export default Footer;