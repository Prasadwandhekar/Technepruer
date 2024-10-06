import FAQ from "./FAQ";
import LottieAnimation from "../assets/LottieAnimation";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import HomeInternship from "../components/HomeIntership";
import LottieWeb from "../assets/LottieWeb";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We are the World Best IT Company</p> */}
              <h1>Welcome to PRADEX </h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At PRADEX
                Technology, we specialize in providing innovative IT services
                and solutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <Link to="/contact">Contact</Link>
                <Link to="/service">Services</Link>

              </div>
            </div>

            {/* hero images  */} 
            <div className="hero-image">
              <LottieAnimation />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}
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

      {/* 3rd section  */}
      <section className="section-hero-one">
        <div className="container-hero-one ">
          {/* hero images  */}
          <div className="hero-image-one">
            <LottieWeb/>
          </div>

          <div className="hero-content-one">
            <p className="tag-p">We are here to help you</p>
            <h1 className="h1-tag">Get Started Today</h1>
            <p className="tag-p2">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn-two btn-group-one">
              <a href="/contact">
                <button className="btn-one">connect now</button>
              </a>
              <a href="/service">
                <button className="btn-one-service secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
       <HomeInternship/>
      <FAQ />
    </>
  );
};

export default Home;
