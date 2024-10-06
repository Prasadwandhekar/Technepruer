import  { useEffect, useState } from 'react';
import "../style/SubWebsitePage.css";

const SubWebsitePage = () => {
  const [subWebsites, setSubWebsites] = useState([]);

  useEffect(() => {
    const fetchSubWebsites = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/sub/SubWebsite',{
            method:"GET",
        });
        if(response.ok){
            const subWebsites = await response.json();
            setSubWebsites(subWebsites.data)
        }
        console.log("services",response);
    } catch (error) {
        console.log(error)
    }
    };

    fetchSubWebsites();
  }, []);

  return (
    <div className="sub-website-container">
      {Array.isArray(subWebsites) && subWebsites.map((site) => (
        <div className="card" key={site._id}>
          <img src={site.photo} alt={site.name} className="card-img" />
          <div className="card-body">
            <h3 className="card-title">{site.name}</h3>
            <p className="card-description">{site.description}</p>
            <a href={site.link} target="_blank" rel="noopener noreferrer" className="card-link">Visit Website</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubWebsitePage;
