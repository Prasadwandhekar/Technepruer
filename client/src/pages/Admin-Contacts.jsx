import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("Contact data", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //defining the function of deleting contacts

  const deleteContactById = async (id) => {
    toast.info("Deleting contact...");
    setContactData((prevContacts) =>
      prevContacts.filter((contact) => contact._id !== id)
    );

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
          // body:JSON.stringify(data),
        }
      );
      if (response.ok) {
        getContacts();
        toast.success("Deleted successfully");
      } else {
        toast.error(" Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <h1>All Contact Data</h1>

        <div className="container admin-contacts">
          <table>
            <thead>
              <tr>
                <th><h2>Username</h2></th>
                <th><h2>Email</h2></th>
                <th><h2>Message</h2></th>
                <th><h2>Action</h2></th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((curContactData) => {
                const { _id, username, email, message } = curContactData;
                return (
                  <tr key={_id}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                    <td>
                      <button
                        className="btn delete-btn"
                        onClick={() => deleteContactById(_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
