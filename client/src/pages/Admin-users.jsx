import { useEffect , useState} from "react"
import { useAuth } from "../store/auth"
import { Link, Outlet } from "react-router-dom";

const AdminUsers = () => {

const [users,setUsers] = useState([])

    const {authorizationToken} = useAuth();

    const getAllUsersData = async () =>{

        try {
            const response = await fetch('http://localhost:8000/api/admin/user',{
                method:"GET",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`user ${JSON.stringify(data)}`);
            setUsers(data);
    //?check whether you are admin and you are login or not otherwise you will phase error
             
        } catch (error) {
            console.log("error to fetching  data",error)
        }
    }
  

     const deleteUser = async (id) => {
        console.log(id);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));

        try {
              const response = await fetch(`http://localhost:8000/api/admin/user/delete/${id}`,{
                method:"DELETE",
                headers: {
                     Authorization : authorizationToken,
                },
              })

              const data = await response.json();
              console.log(`users after delete: ${data}`)

              if(!response.ok){
                getAllUsersData();
              }
        } catch (error) {
            console.log("error to fetching data",error)
        }
     }
     
    useEffect( () =>{
        getAllUsersData();
    },[]);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th><h2>Name</h2></th>
                <th><h2>Email</h2></th>
                <th><h2>phone</h2></th>
                <th><h2>Edit</h2></th>
                <th><h2>Delete</h2></th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) &&
                users.map((curUser, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="Name">{curUser.username}</td>
                      <td data-label="Email">{curUser.email}</td>
                      <td data-label="Phone">{curUser.phone}</td>
                      <td data-label="Update">
                        <Link to={`/admin/user/${curUser._id}/edit`} className="edit-btn">Edit</Link>
                      </td>
                      <td data-label="Delete">
                        <button className="delete-btn" onClick={() => deleteUser(curUser._id)}>Delete</button>
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
  )
}

export default AdminUsers;
