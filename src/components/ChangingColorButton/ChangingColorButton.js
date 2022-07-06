import { useState } from 'react';

const ChangingColorButton = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  const style =
    buttonColor === 'red'
      ? { backgroundColor: 'red' }
      : { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <button
        style={style}
        onClick={() => {
          setButtonColor(newColor);
        }}
      >
        Change to {newColor}
      </button>
      <input type='checkbox' />
    </div>
  );
};

export default ChangingColorButton;
