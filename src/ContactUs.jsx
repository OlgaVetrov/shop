import Navbar from "./Components/Navbar";
import Info from "./Info";

const ContactUs = () => {
  return (
    <div className="info-page">
      <Navbar />

      <main className="info-content">
        <h1>Contact Us</h1>

        <Info />

        <div className="contact-map">
          <iframe
            title="Our location"
            src="https://www.google.com/maps?q=120+King+Street+West,+Toronto,+ON&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
