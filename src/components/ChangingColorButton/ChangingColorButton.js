import { useState } from 'react';

import { replaceCamelCaseWithSpaces } from '../../util/util';
import { COLORS } from '../../constants/constants';

const ChangingColorButton = () => {
  const [buttonColor, setButtonColor] = useState(COLORS.MEDIUM_VIOLET_RED);
  const [isDisabled, setIsDisabled] = useState(false);

  let newColor = buttonColor === COLORS.MEDIUM_VIOLET_RED ? COLORS.MIDNIGHT_BLUE : COLORS.MEDIUM_VIOLET_RED;
  let style = { backgroundColor: buttonColor };

  if (isDisabled) style = { backgroundColor: COLORS.GREY, color: COLORS.WHITE };
  else if (buttonColor === COLORS.MEDIUM_VIOLET_RED) style = { ...style };
  else if (buttonColor === COLORS.MIDNIGHT_BLUE) style = { ...style, color: COLORS.WHITE };

  const buttonClickHandler = () => {
    setButtonColor(newColor);
  };

  const radioClickHandler = e => {
    setIsDisabled(e.target.checked);
  };

  return (
    <div>
      <div>
        <button style={style} disabled={isDisabled} onClick={buttonClickHandler}>
          Change to {replaceCamelCaseWithSpaces(newColor)}
        </button>
      </div>
      <div>
        <input id='disable-button-checkbox' type='checkbox' onClick={radioClickHandler} />
        <label htmlFor='disable-button-checkbox'>Disable button</label>
      </div>
    </div>
  );
};

export default ChangingColorButton;
