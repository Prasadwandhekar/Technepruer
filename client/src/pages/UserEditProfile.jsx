import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import "../style/UserEditProfile.css";

const UserEditProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: ''
  });
  const [initialUser, setInitialUser] = useState(null);

  const { id } = useParams();
  const { authorizationToken } = useAuth();
//   const history = useHistory();

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
          setInitialUser(data);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  //?validatiion for UserEditform 

  const validateForm = () => {
    const { username, email, phone } = user;
    let isValid = true;

    // Username validation
    if (username.length < 3) {
      toast.error('Username must be at least 3 characters long');
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Invalid email format');
      isValid = false;
    }

    // Phone number validation
    if (phone.length !== 10 || isNaN(phone)) {
      toast.error('Phone number must be exactly 10 digits');
      isValid = false;
    }

    return isValid;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

     
    if (!validateForm()) {
        return; // Stop submission if validation fails
      }

      if (JSON.stringify(user) === JSON.stringify(initialUser)) {
        toast.info('No changes made');
        return;
      }  
      
    try {
      const response = await fetch(`http://localhost:8000/api/auth/user/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify(user),  
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Profile updated successfully');
        // history.push(`/user/profile/${id}`);
      } else {
        toast.error(data.message || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      toast.error('Error updating user data');
    }
  };

  return (
    <div className="user-edit-profile">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserEditProfile;
