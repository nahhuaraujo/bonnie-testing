import { useState } from 'react';

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  const style =
    buttonColor === 'red'
      ? { backgroundColor: 'red' }
      : { backgroundColor: 'blue', color: 'white' };

  return (
    <main>
      <button
        style={style}
        onClick={() => {
          setButtonColor(newColor);
        }}
      >
        Change to {newColor}
      </button>
      <input type='checkbox' />
    </main>
  );
};

export default App;
