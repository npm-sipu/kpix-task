const LoginContentCard = () => {
  return (
    <div className='flex mt-6 items-center text-center text-white gap-[92px]'>
      <div className='flex flex-col justify-center items-center'>
        <img src='/laptop.svg' alt='laptop' />
        <p>Scada</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src='/sensor.svg' alt='sensor' />
        <p>Sensors</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src='/wifi.svg' alt='wifi' />
        <p>Equipment</p>
      </div>
    </div>
  );
};

export default LoginContentCard;
