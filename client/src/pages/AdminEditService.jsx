import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import {   useNavigate, useParams } from "react-router-dom";
import "../style/AdmineditService.css";

const AdminEditService = () => {
  const [service, setService] = useState({
    service: "",
    provider: "",
    price: "",
    description: "",
  });
  const {id} = useParams();
  console.log("params single user", id);
  const { authorizationToken } = useAuth();
  console.log("Authorization Token:", authorizationToken);

  const navigate = useNavigate();

  const getServiceData = async () => {
    if (!authorizationToken) {
        console.error("Authorization token is missing.");
        return;
      }

    try {
      const response = await fetch(`http://localhost:8000/api/admin/service/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`Service data: ${JSON.stringify(data)}`);
        setService(data);
      
    } catch (error) {
      console.log("error while fetching data",error);
      toast.error("error while fetching data",error);
    }
  };

  useEffect(() => {
    getServiceData();
  }, [authorizationToken, id] );

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/admin/service/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        toast.success("Service updated successfully");
        navigate("/admin/service");
      } else {
        toast.error("Failed to update service");
      }
    } catch (error) {
        console.error("Error updating service:", error);
      }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setService((prevUser) => ({ 
        ...prevUser,
         [name]: value
         }));
  };

  return (
    <section className="admin-edit-service-section">
    <div className="container-edit">
      <h1 className="heading">Edit Service Data</h1>
      <form className="edit-service-form" onSubmit={handleSubmit}>
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
        <button className="submit-button" type="submit">Update Service</button>
      </form>
    </div>
  </section>
  );
};

export default AdminEditService;
