import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import Intern from "../pages/Intern"
import "./Service.css";
import SubWebsitePage from "./SubWebsitePage";

const Service = () => {
  const { services } = useAuth();
  console.log("services", services);

 

  return (
    <>
      <section className="service-section">
        <div className="service-container">
          <h1>Our Sub Services</h1>
        </div>
        <SubWebsitePage />

        <div>
          <h1>Our Internship</h1>
        </div>
        <Intern/>

        <div className="service-container">
          <h1 className="service-heading">Our Services</h1>
        </div>

        <div className="service-grid">
          {Array.isArray(services) &&
            services.map((curElem, index) => {
              const { price, description, provider, service } = curElem;
              return (
                <div className="service-card" key={index}>
                  <div className="service-card-img">
                    <img src="p.jpeg" alt="service" />
                    {/* <img src="pasha.JPG" alt="service" /> */}
                  </div>
                  <div className="service-card-content">
                    <h2 className="service-card-title">{service}</h2>
                    <p className="service-card-provider">{provider}</p>
                    <p className="service-card-price">{price}</p>
                    <p className="service-card-description">{description}</p>
                    <Link to={`/service-request`}>
                      <button className="service-card-button">
                        Request Service
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Service;
