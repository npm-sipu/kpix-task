import Carousel from "./Ui/Carousel";

const LoginSideScreen = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#005932] to-[#00BF6B] h-screen'>
      <h3>Connect Any Physical Entity</h3>
      <h5>Field Proven Built-in Asset Data Models</h5>
      <p>
        Powered by built-in asset data models, KPIX enables effortless
        integration with any physical entities, from sensors/actuators to
        machinery/equipment to larger entities like buildings, allowing for
        comprehensive asset digitalization.
      </p>
      <div className='flex justify-center items-center'>
        <Carousel />
      </div>
    </div>
  );
};

export default LoginSideScreen;
