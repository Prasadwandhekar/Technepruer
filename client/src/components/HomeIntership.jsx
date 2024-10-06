import { NavLink } from "react-router-dom";
import "./HomeInternship.css";
import LottieComputer from "../assets/LottieComputer";

const HomeInternship = () => {
  return (
    <section className="home-internship-section">
      <div className="container-interns">
        <div className="text-sectionAll">
          <h1>Internships</h1>
          <p style={{ fontFamily: 'Cursive', fontStyle: 'italic', color: '#333' }}>
            Our internships are crafted to provide you with hands-on experience
            and real-world skills that are crucial for your professional growth.
            Whether you are a student seeking to apply your academic knowledge
            or a recent graduate eager to gain practical experience, our
            internship programs are designed to offer valuable insights and
            exposure to industry practices. During the internship, you will have
            the opportunity to work closely with experienced professionals,
            participate in challenging projects, and develop key skills that
            
          </p>

          <NavLink to="/service" className="btn-view-internships">
            View Internships
          </NavLink>
        </div>
        <div className="image-sectionAll">
          <LottieComputer/>
        </div>
      </div>
    </section>
  );
};

export default HomeInternship;
