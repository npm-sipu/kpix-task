import LoginSideScreen from "../Componets/LoginSideScreen";

const Login = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[523px]'>Login</div>
      <div className='flex-1'>
        <LoginSideScreen />
      </div>
    </div>
  );
};

export default Login;
