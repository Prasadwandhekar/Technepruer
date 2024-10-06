import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import "../style/AdminAddService.css"

const AdminAddService = () => {
  const [service, setService] = useState({
    service: "",
    provider: "",
    price: "",
    description: "",
  });
  const { authorizationToken } = useAuth();
//   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/admin/service/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        toast.success("Service added successfully");
        // navigate("/admin/service"); // Redirect to service list page
      } else {
        toast.error("Failed to add service");
      }
    } catch (error) {
      console.error("Error adding service:", error);
      toast.error("Failed to add service");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  return (
    <section className="admin-add-service-section">
      <div className="container-add">
        <h1 className="heading">Add New Service</h1>
        <form className="add-service-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="service">
            Service:
            <input
              className="form-input"
              type="text"
              name="service"
              id="service"
              autoComplete="off"
              value={service.service}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="form-label" htmlFor="provider">
            Provider:
            <input
              className="form-input"
              type="text"
              name="provider"
              id="provider"
              autoComplete="off"
              value={service.provider}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="form-label" htmlFor="price">
            Price:
            <input
              className="form-input"
              type="number"
              name="price"
              id="price"
              autoComplete="off"
              value={service.price}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="form-label" htmlFor="description">
            Description:
            <textarea
              className="form-textarea"
              name="description"
              id="description"
              autoComplete="off"
              value={service.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <button className="submit-button" type="submit">Add Service</button>
        </form>
      </div>
    </section>
  );
};

export default AdminAddService;
