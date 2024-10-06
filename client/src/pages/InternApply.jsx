import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "../style/InternApply.css"; // Assuming you have a CSS file for styling

const InternApply = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    collegeName: "",
    branch: "",
    domain: "",
    duration: "",
    gender: "",
    department: "",
    year: "",
    questions: "",
  });

  const [internship, setInternship] = useState("");
  const { authorizationToken } = useAuth();

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/form/internship/preview/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setInternship(data);
        } else {
          toast.error("Failed to fetch internship data");
        }
      } catch (error) {
        console.error("Error fetching internship data:", error);
        toast.error("Error fetching internship data");
      }
    };

    fetchInternship();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/form/internship/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({ ...formData, internship: id }),
        }
      );

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          username: "",
          email: "",
          mobile: "",
          collegeName: "",
          branch: "",
          domain: "",
          duration: "",
          gender: "",
          department: "",
          year: "",
          questions: "",
        });
        console.log("applied data ", formData);
      } else {
        toast.error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting application");
    }
  };

  return (
    <div className="intern-apply-container">
      <form className="intern-apply-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Apply for Internship</h2>

        {internship && <h2 className="internship-name">{internship.name}</h2>}

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Name"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter Number"
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="collegeName">College Name:</label>
        <input
          type="text"
          id="collegeName"
          name="collegeName"
          placeholder="Enter Number"
          value={formData.collegeName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          placeholder="Your Branch"
          value={formData.branch}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="domain">Domain:</label>
        <input
          type="text"
          id="domain"
          name="domain"
          value={internship ? internship.domain : ''}
          readOnly
        />

        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          placeholder="Time period"
          value={formData.duration}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          placeholder="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Your Department"
          value={formData.department}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="year"
          value={formData.year}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="questions">Any Questions:</label>
        <textarea
          id="questions"
          name="questions"
          placeholder="any questions"
          value={formData.questions}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit" className="submit-button">Apply</button>
      </form>
    </div>
  );
};

export default InternApply;
