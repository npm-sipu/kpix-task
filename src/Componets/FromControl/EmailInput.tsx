import React, { ChangeEvent } from "react";

interface EmailInputProps {
  email: string;
  onEmailChange: (email: string) => void;
  error: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  onEmailChange,
  error,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onEmailChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={handleChange}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EmailInput;
