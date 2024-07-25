import LoginForm from "../Componets/LoginForm";
import LoginSideScreen from "../Componets/LoginSideScreen";

const Login = () => {
  return (
    <div className='w-full h-screen flex max-lg:flex-col'>
      <div className='lg:w-[35%] w-full'>
        <LoginForm />
      </div>
      <div className='flex-1'>
        <LoginSideScreen />
      </div>
    </div>
  );
};

export default Login;
