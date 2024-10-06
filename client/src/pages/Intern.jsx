import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../style/InternshipPage.css";

const InternshipPage = () => {
  const { intern } = useAuth();
  console.log("intern", intern);

  return (
    <div className="internship-page">
      {/* <h1>Internships</h1> */}
      <div className="internship-cards">
        {Array.isArray(intern) &&
          intern.map((intern, index) => (
            <div key={index} className="internship-card">
              <img
                src={intern.photoUrl}
                alt={`${intern.name} internship`}
                className="internship-image"
              />
              <h2 className="internship-title">{intern.name}</h2>
              <p className="internship-description">{intern.description}</p>
              {/* <p>
                <strong>Domain:</strong> {intern.domain}
              </p>
              <p>
                <strong>Languages:</strong> {intern.languages.join(", ")}
              </p>
              <p>
                <strong>Certifications:</strong> {intern.certifications.join(", ")}
              </p>
              <p>
                <strong>Duration:</strong> {intern.duration}
              </p>
              <p>
                <strong>Amount:</strong> ${intern.amount}
              </p>
              <p>
                <strong>Mentors:</strong> {intern.mentors.join(", ")}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {new Date(intern.startDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Feedback Support:</strong> {intern.feedbackSupport}
              </p>
              <p>
                <strong>Course Language:</strong> {intern.courseLanguage}
              </p> */}

              <div className="button-row">
                <Link to={`/internship/preview/${intern._id}`} className="btn btn-preview">
                  Preview
                </Link>
                <Link to={`/internship/apply/${intern._id}`} className="btn btn-apply">
                  Apply
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InternshipPage;
