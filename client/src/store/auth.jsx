import { createContext, useContext, useState,useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services ,setServices] = useState("");
  const [isLoading ,setLoading] = useState(true);
  const [intern ,setIntern] = useState("")
  const authorizationToken = `Bearer ${token}`;


  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedIn ", isLoggedIn);

  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    if (!token) {
        console.log("No token available");
        return;
      }
  
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization:authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        
        // our main goal is to get the user data 👇
        console.log("user data",data.userData);
        setUser(data.userData);
        setLoading(false);
    } else {
      setLoading(false);
        const errorData = await response.json();
        console.error("Error fetching user data:", errorData.message || errorData);
      }
    } catch (error) {
      console.log("Network or other error:", error);
    }
  };

  const getServicesData = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/data/service",{
            method:"GET",
        });
        if(response.ok){
            const services = await response.json();
            setServices(services.data)
        }
        console.log("services",response);
    } catch (error) {
        console.log(error)
    }
  }

  const getInternshipData = async () => {
    try{
         const response = await fetch("http://localhost:8000/api/form/internship",{
           method:"GET",
         });
         if(response.ok){
          const data = await response.json();
          setIntern(data.data);
         }
         console.log("intern",response);
    }
    catch(error){
      console.log("error",error)
    }
  }

  useEffect(() => {
    getServicesData();
    userAuthentication();
    getInternshipData();
  }, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser,user,services,authorizationToken ,isLoading,intern}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => { 
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};