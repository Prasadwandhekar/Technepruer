import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
import LottieLog from "../assets/LottieLog";


 const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();


  const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
 //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical  

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const responseData = await response.json();
    console.log("after login: ", responseData);

    if (response.ok) {
      // alert("login successful")
     

      storeTokenInLS(responseData.token);
      setUser({email: "", password: "" });
      // toast.success("Registration Successful");
      toast.success("Login successful")

      navigate("/");
    }else{
      toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);

    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
               <LottieLog/>
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login