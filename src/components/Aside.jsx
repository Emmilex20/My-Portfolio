import { FaRoad } from "react-icons/fa";
import Img from "../../public/images/Emma-1.jpg"
import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src={Img} alt="" width="80"/>
            </figure>
            <div className="info-content">
                <h1 className="name">Emmanuel Agina</h1>
                <p className="title">Web Developer</p>
            </div>
            <button className="info_more-btn">
                <span>Show Contacts</span>
                <GiClawSlashes />
            </button>
        </div>

        {/* contact info */}
        <div className="sidebar-info_more">
            <hr className="separator2"/>
            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                        <GiMailbox />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Email</p>
                        <a href="mailto:aginaemmanuel6@gmail.com" className="contact-link">aginaemmanuel6@gmail.com</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <GiPhone />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <a href="tel:+2349132062212" className="contact-link">(+234) 9132062212</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <GiCalendar />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">D.O.B</p>
                        <time dateTime="1996-12-12" className="contact-link">December 12, 1996</time>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <FaRoad />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Location</p>
                        <address>24 Road, Festac 1 102102, Lagos</address>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Aside