import Carousel from "./Ui/Carousel";
import LoginContent from "./Ui/LoginContent";

const LoginSideScreen = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#005932] to-[#00BF6B] h-screen flex flex-col'>
      <div className='flex justify-center'>
        <div className='pt-4'>
          <Carousel />
        </div>
      </div>
      <LoginContent />
    </div>
  );
};

export default LoginSideScreen;
