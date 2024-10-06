import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import "../style/UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Extract the user ID from the URL
  const { authorizationToken } = useAuth();

  useEffect(() => {
    // Fetch the user data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/auth/user/${id}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          toast.error(data.message || 'Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data');
      }
    };

    fetchUserData();
  }, [id, authorizationToken]);

  if (!user) {
    return <div>Loading...</div>;
  }  
     
  return (
    <div className="user-profile-container">
    <div className="user-profile">
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <Link to={`/user/update/${id}/profile`} className="edit-profile-link">Edit Profile</Link>
    </div>
  </div>
  );
};

export default UserProfile;
