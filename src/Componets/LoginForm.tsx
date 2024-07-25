import React, { useState, FormEvent } from "react";
import EmailInput from "./FromControl/EmailInput";
import PasswordInput from "./FromControl/PassowrdInput";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
    }
    if (validateEmail(email) && validatePassword(password)) {
      console.log("Form submitted:", { email, password });
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/dashboard/visulization");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col border-b border-gray-300 gap-6 items-center py-6'
    >
      <EmailInput
        email={email}
        onEmailChange={handleEmailChange}
        error={emailError}
      />
      <PasswordInput
        password={password}
        onPasswordChange={handlePasswordChange}
        error={passwordError}
      />
      <button
        type='submit'
        className='bg-[#4423B1] w-full text-white py-3.5 rounded-3xl font-medium'
      >
        Login
      </button>

      <a className='text-black underline font-medium' href='#'>
        Forgot Password?
      </a>
    </form>
  );
};

export default LoginForm;
