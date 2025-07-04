import { createContext, useContext, useState } from 'react';

// Dark / Light Theme Context 
const ThemeContext = createContext('light');

const SomeApp = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  return (
    <ThemeContext value={currentTheme}>
      <SomeCard />
      <button onClick={() => {setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light')}}>
        change theme
      </button>
    </ThemeContext>
  );
};

const SomeCard = () => { // no need to pass props
  const theme = useContext(ThemeContext);
  return (
    <div className={`button-${theme}`}>
      Card content
    </div>
  )
}
