import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams(); // Get the user ID from the URL
  console.log("params single user", params);
  const { authorizationToken } = useAuth(); 

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/user/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`user data: ${JSON.stringify(data)}`);
      setUser(data);
    } catch (error) {
      console.log("error fetching user data", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await fetch(`http://localhost:8000/api/admin/user/update/${params.id}`,{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: authorizationToken,
            },
            body:JSON.stringify(user),
        });
        if(response.ok) {
            toast.success("Updated successfully");
        } else{
            toast.error(" Not updated");
        }

    }catch(error){
        console.log(error);
    }
  }

  
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  return (
    <>
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>

      <div className="container grid grid-two-cols">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input 
              type="text" 
              name="username"
              id="username"
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              required
                />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input 
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={user.email} 
              onChange={handleInput}
              required 
              
                />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
               type="phone" 
               value={user.phone}  
               id="phone"
               autoComplete="off"
               name="phone"
               required
               onChange={handleInput}

               
               />
               
            </div>
              <div>
                <button type="submit" > Update</button>
              </div>
          </form>
        </section>
      </div>
    </section>
    {/* <Outlet/> */}
    </>
  );
};

export default AdminUpdate;
