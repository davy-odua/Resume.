import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-row gap">
            <div className="footer-col">
                <a>Get In Touch</a>
                <h2>Contact Information</h2>
                <div className="contact">
                    <div className="contact-info"><MdOutlineEmail className="contact-icon" /><p>Email <span>davyodua@gmail.com</span> </p></div>
                    <div className="contact-info"><FaPhoneAlt className="contact-icon"  /><p>Phone <span>+254 768738779</span> </p></div>
                    <div className="contact-info"><MdLocationOn className="contact-icon"  /><p>Location <span>Nairobi, KE</span> </p></div>
                </div>
            </div>
            <div className="footer-col">
                <form action="">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />
                    <textarea name="" type="text" placeholder="Your Message" ></textarea>      
                    <button><p>Send Message</p></button>          
                </form>
            </div>            
        </div>
    </div>
    </>
  )
}

export default Footer;