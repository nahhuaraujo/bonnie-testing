import { useState } from 'react';

const DisablingButton = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        onClick={() => {
          setDisabled(!disabled);
        }}
      />
      <button disabled={disabled}>Send</button>
    </div>
  );
};

export default DisablingButton;
