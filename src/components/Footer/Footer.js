import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaHome,
  FaBookReader,
  FaContao,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FcServiceMark, FcGallery } from "react-icons/fc";
import { MdPreview } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              We always work for your happiness your wish. We will keep in touch with you 24/7 where you need. know the world by rely on us. Happy journey!
            </p>
          </div>
          <div className="box">
            <h3>branch locations</h3>
            <Link to="#">bangladesh</Link>
            <Link to="#">USA</Link>
            <Link to="#">japan</Link>
            <Link to="#">france</Link>
            <Link to="#">china</Link>
            <Link to="#">singapore</Link>
            <Link to="#">egypt</Link>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <Link to="#">
              <FaFacebookF></FaFacebookF>facebook
            </Link>
            <Link to="#">
              <FaInstagramSquare></FaInstagramSquare>instagram
            </Link>
            <Link to="#">
              <FaTwitter></FaTwitter>twitter
            </Link>
            <Link to="#">
              <FaLinkedin></FaLinkedin>linkedin
            </Link>
          </div>
        </div>

        <h1 className="credit">
          all copirights reserved by <span>QuNar Tours</span> !
        </h1>
      </section>
    </div>
  );
};

export default Footer;
