import LoginContentCard from "./LoginContentCard";

const LoginContent = () => {
  return (
    <div className='flex flex-grow justify-center flex-col items-center'>
      <div className='flex justify-center flex-col gap-3 text-white items-center max-w-[700px]'>
        <h3 className='font-semibold text-[2.5rem] text-center leading-[56px]'>
          Connect Any Physical Entity
        </h3>
        <h5 className='font-normal text-center text-[1.75rem] leading-[40px]'>
          Field Proven Built-in Asset Data Models
        </h5>
        <p className='font-normal text-center text-[18px] leading-[30px]'>
          Powered by built-in asset data models, KPIX enables effortless
          integration with any physical entities,{" "}
          <span className='font-semibold'>
            from sensors/actuators to machinery/equipment to larger entities
            like buildings,
          </span>{" "}
          allowing for comprehensive asset digitalization.
        </p>
      </div>
      <LoginContentCard />
    </div>
  );
};

export default LoginContent;
