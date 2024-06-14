import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import avatar from "../assets/profile.png";
import { AuthContext } from "../context/AuthContext";
import Password from "./Password";
import Username from "./Username";

const Login = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "root",
    password: "QWqw!@12",
    email: "",
    profile: avatar,
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateUsername = () => {
    const { username } = formData;
    if (username.trim() === "") {
      toast.error("Username is required");
      return false;
    } else if (username.includes(" ")) {
      toast.error("Invalid username");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    const { password } = formData;
    const lengthRegex = /.{8,}/;
    const numberRegex = /\d/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (
      !lengthRegex.test(password) ||
      !numberRegex.test(password) ||
      !upperCaseRegex.test(password) ||
      !lowerCaseRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      toast.error("Incorrect Password");
      return false;
    }
    return true;
  };

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    const { username } = formData;
    if (validateUsername()) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${username}`
        );
        setFormData({
          ...formData,
          email: response.data.user.email,
          profileImage: response.data.user.profile || avatar,
        });
        setStep(2);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (validatePassword()) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/login",
          {
            username,
            password,
          }
        );
        localStorage.setItem("token", response.data.token);
        login(response.data.token);
        console.log("response ", response.data);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      {step === 1 ? (
        <Username
          username={formData.username}
          handleChange={handleChange}
          handleUsernameSubmit={handleUsernameSubmit}
        />
      ) : (
        <Password
          profileImage={formData.profile}
          email={formData.email}
          password={formData.password}
          handleChange={handleChange}
          handlePasswordSubmit={handlePasswordSubmit}
        />
      )}
    </div>
  );
};

export default Login;
