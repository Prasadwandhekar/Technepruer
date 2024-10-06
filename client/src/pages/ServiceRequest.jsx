import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "../style/ServiceRequest.css";

const ServiceRequest = () => {
  const { authorizationToken } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    domain: "",
    durationTimeForProject: "",
    budget: "",
    dateForMeeting: "",
    timeForMeeting: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/request/service-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("service request data", data);
        toast.success("Our team will reach out to you very soon.");
        // history.push("/"); // Redirect to the home page or any other page
      } else {
        toast.error("Failed to submit the request", response.status);
      }
    } catch (error) {
      console.error("Error submitting service request:", error);
      toast.error("Error submitting service request");
    }
  };

  return (
    <div className="service-request-form-container">
      <h1>Service Request</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
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

        <label htmlFor="domain">Domain:</label>
        <select
        type="text"
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleInputChange}
          required
        >
          <option value="Select Domain">Select Domain</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Documentation">Documentation</option>
        </select>

        <label htmlFor="budget">Budget:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="Your budget"
          value={formData.budget}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="durationTimeForProject">
          Duration Time for Project:
        </label>
        <input
          type="text"
          id="durationTimeForProject"
          name="durationTimeForProject"
          placeholder="e.g., 1 month, 2 months"
          value={formData.durationTimeForProject}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="dateForMeeting">Date for Meeting:</label>
        <input
          type="date"
          id="dateForMeeting"
          name="dateForMeeting"
          placeholder="Date for Meeting"
          value={formData.dateForMeeting}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="timeForMeeting">Time for Meeting:</label>
        <input
          type="time"
          id="timeForMeeting"
          name="timeForMeeting"
          placeholder="Time for Meeting"
          value={formData.timeForMeeting}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServiceRequest;
