import { useState } from 'react';

const ChangingColorButton = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  let style;

  if (isDisabled) style = { backgroundColor: 'grey', color: 'white' };
  else if (buttonColor === 'blue')
    style = { backgroundColor: buttonColor, color: 'white' };
  else if (buttonColor === 'red') style = { backgroundColor: buttonColor };

  return (
    <div>
      <div>
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
      <div>
        <input
          id='disable-button-checkbox'
          type='checkbox'
          onClick={e => {
            setIsDisabled(e.target.checked);
          }}
        />
        <label htmlFor='disable-button-checkbox'>Disable button</label>
      </div>
    </div>
  );
};

export default ChangingColorButton;
