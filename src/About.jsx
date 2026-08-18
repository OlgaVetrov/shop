import Navbar from "./Components/Navbar";
import Text from "./Text";

const About = () => {
return (
<div className="info-page">
<Navbar />

<main className="info-content">
<h1>About Us</h1>

<Text />

<div className="about-image">
<img src="https://images.pexels.com/photos/36730629/pexels-photo-36730629.jpeg"
alt="Fashion store"/>
</div>
</main>
</div>
);
};

export default About;