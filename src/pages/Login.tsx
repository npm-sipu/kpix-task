import { Link } from "react-router-dom";
import LoginFooter from "../Componets/LoginFooter";
import LoginForm from "../Componets/LoginForm";
import LoginSideScreen from "../Componets/LoginSideScreen";

const Login = () => {
  return (
    <div className='w-full lg:h-screen bg-white flex max-lg:flex-col-reverse'>
      <div className='lg:w-[35%] w-full min-h-screen relative flex items-center justify-center'>
        <div className='lg:w-[70%] max-lg:w-[360px]'>
          <div className='w-full justify-center flex items-center border-b border-[#D7890D] py-6'>
            <img src='/public/KpiXLogo.svg' alt='logo 2' />
          </div>
          <LoginForm />
          <div className='pt-6 flex justify-center items-center'>
            <p className='font-medium'>
              Don’t have account?{" "}
              <Link to='#' className='text-[#4423B1] underline'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <LoginFooter />
      </div>

      <div className='flex-1'>
        <LoginSideScreen />
      </div>
    </div>
  );
};

export default Login;
