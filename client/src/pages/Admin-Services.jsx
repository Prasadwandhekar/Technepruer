import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
// import "./AdminService.css"

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const { authorizationToken } = useAuth();

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/service", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
        setServices(data);
      
    } catch (error) {
        console.log("error to fetching  data",error)
    }
  };

  const deleteService = async (id) => {

    setServices((prevServices) => prevServices.filter((service) => service._id !== id));  

    try {
      const response = await fetch(`http://localhost:8000/api/admin/service/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
           const data = await response.json();
           console.log(`Service after delete: ${data}`)
       
           if(!response.ok){
            getServices();
        }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <section className="admin-services-section">
        <div className="container-services">
        <div className="header">
            <h1>All Services Data</h1>
            <Link to="/admin/service/add" className="add-service-button">Add New Service</Link>
          </div>
          <table>
            <thead> 
              <tr>
                <th>Service</th>
                <th>Provider</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(services) &&
              services.map((curService,index) => {
                const { _id, service, provider, price, description } = curService;
                return (
                  <tr key={index}>
                    <td data-label="Service">{service}</td>
                    <td data-label="Service">{provider}</td>
                    <td data-label="Service">{price}</td>
                    <td data-label="Service">{description}</td>
                    <td data-label="Service" className="editbtn">
                      <Link to={`/admin/service/${curService._id}/edit`}                
                      >Edit</Link>
                    </td>
                    <td className="deletebtn">
                      <button onClick={() => deleteService(_id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <Outlet/>
    </>
  );
};

export default AdminServices;
