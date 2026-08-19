import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <FaLocationDot />
        <p>120 King Street West, Toronto, ON</p>
      </div>

      <div className="contact-item">
        <FaPhone />
        <p>+1 (416) 555-0188</p>
      </div>

      <div className="contact-item">
        <FaEnvelope />
        <p>hello@ourboutique.com</p>
      </div>

      <div className="contact-item">
        <FaClock />
        <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday – Sunday: 10:00 AM – 4:00 PM</p>
      </div>
    </div>
  );
};

export default Info;
