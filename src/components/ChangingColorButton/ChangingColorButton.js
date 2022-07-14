import { useState } from 'react';

import { replaceCamelCaseWithSpaces } from '../../util/util';
import { COLORS } from '../../constants/constants';

import './ChangingColorButton.scss';

const ChangingColorButton = () => {
  const [buttonColor, setButtonColor] = useState(COLORS.MEDIUM_VIOLET_RED);
  const [isDisabled, setIsDisabled] = useState(false);

  let newColor = buttonColor === COLORS.MEDIUM_VIOLET_RED ? COLORS.MIDNIGHT_BLUE : COLORS.MEDIUM_VIOLET_RED;
  let style = { backgroundColor: buttonColor, color: COLORS.WHITE };

  if (isDisabled) style = { ...style, backgroundColor: COLORS.GREY };

  const buttonClickHandler = () => {
    setButtonColor(newColor);
  };

  const radioClickHandler = e => {
    setIsDisabled(e.target.checked);
  };

  return (
    <div className='button-container'>
      <button className='button' type='button' style={style} disabled={isDisabled} onClick={buttonClickHandler}>
        Change to {replaceCamelCaseWithSpaces(newColor)}
      </button>
      <div className='radio-container'>
        <input id='disable-button-checkbox' type='checkbox' onClick={radioClickHandler} />
        <label className='radio-label' htmlFor='disable-button-checkbox'>
          Disable button
        </label>
      </div>
    </div>
  );
};

export default ChangingColorButton;
