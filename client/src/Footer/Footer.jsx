import "./Footer.css"; // Import CSS file for styling
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// import { toast } from 'react-toastify';


const Footer = () => {

  // const handleClick = () => {
  //   // Display toast notification
  //   toast.success('Message sent successfully!', {
  //     position: toast.POSITION.TOP_CENTER
  //   });
  // }

  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="maxi">
      <div className="logos">
          <img src="p.jpeg" alt="images" width="30" height="30" />
        </div>
        <h2>PRADEX</h2>
        </div>
       
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          suscipit, libero sed consectetur vestibulum.
        </p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button  >Subscribe</button>
        </div>
      </div>
      <div className="footer-column">
        <h2>Quick Links</h2>
        <ul>
        <li style={{ display: 'flex', marginRight: '10px' }} className="foot">
                      <IoHome style={{ marginRight: "5px" }} />
            <a href="/about">About </a>
          </li>
          <li style={{ display: 'flex', marginRight: '10px' }}>
            <MdOutlineEventNote style={{ marginRight: "5px" }} />
            <a href="/service">Service</a>
          </li>
          <li style={{ display: 'flex', marginRight: '10px' }}>
            <MdContactMail style={{ marginRight: "5px" }} />
            <a href="/contact">Contact</a>
          </li>
          <li style={{ display: 'flex', marginRight: '10px' }}>
            <GrGallery style={{ marginRight: "5px" }} />
            <a href="/user/:id/profile">Profile</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>Contact Info</h2>
        <div className="contact-info">
          <div>
            <FaPhoneSquareAlt />
            <i className="fas fa-phone-alt"></i>
            <span>+1234567890</span>
          </div>
          <div>
            <MdMarkEmailUnread />
            <i className="fas fa-envelope"></i>
            <span>example@example.com</span>
          </div>
          <div>
            <FaLocationDot style={{ fontSize: "35px" }} />
            <i className="fas fa-map-marker-alt"></i>
            <span>
              Sinhgad College of Engineering Address: S.No. 44/1, Vadgaon
              (Budruk), Off. Sinhgad Road, Pune, Maharashtra 411041, India
            </span>
          </div>
        </div>
      </div>

      {/* <p className="copyright">© 2024 Copyright: PRADEX</p> */}

      {/* < div className="social-icons">
          <a href="/"><i className="fab fa-facebook"></i>  <FaFacebook/> </a>
          <a href="/"><i className="fab fa-twitter"></i> <FaInstagram/></a>
          <a href="/"><i className="fab fa-instagram"></i><FaLinkedin/></a>
          <a href="/"><i className="fab fa-linkedin"></i> <FaYoutube/></a>
          
        </div> */}
    </footer>
  );
};

export default Footer;
