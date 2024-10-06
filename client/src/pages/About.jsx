import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import LottieCoding from "../assets/LottieCoding";

 const About = () => {

   const {user} =useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
                
              <h2> Welcome, {user ? <span style={{ color: 'blue' }}>{user.username}</span> : null} to our website
              </h2>
              <br/>
              <h2>Why Choose Us? </h2>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We are
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
             <LottieCoding/>
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container-data grid grid-four-cols">
          <div className="divAll">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="divOne">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="divTwo">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="divThree">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About