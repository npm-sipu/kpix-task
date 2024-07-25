import React, { ChangeEvent, useState } from "react";

interface PasswordInputProps {
  password: string;
  onPasswordChange: (password: string) => void;
  error: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  onPasswordChange,
  error,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor='password'>Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        id='password'
        value={password}
        onChange={handleChange}
        required
      />
      <button type='button' onClick={toggleShowPassword}>
        {showPassword ? "Hide" : "Show"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PasswordInput;
