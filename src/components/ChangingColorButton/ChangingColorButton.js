import { useState } from 'react';

const ChangingColorButton = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  const style =
    buttonColor === 'red'
      ? { backgroundColor: 'red' }
      : { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <input
        type='checkbox'
        onClick={e => {
          setIsDisabled(e.target.checked);
        }}
      />
      <button
        style={style}
        disabled={isDisabled}
        onClick={() => {
          setButtonColor(newColor);
        }}
      >
        Change to {newColor}
      </button>
    </div>
  );
};

export default ChangingColorButton;
