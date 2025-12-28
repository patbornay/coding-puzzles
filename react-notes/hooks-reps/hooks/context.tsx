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

const MyContext1 = createContext({value1: 'default value 1', value2: 'default'});
const MyComponent1 = () => {
  const {value1, value2} = useContext(MyContext1);
  return (
    <div>
      value1: {value1}, value2: {value2}
    </div>
  )
}
const MyApp1 = () => {
  const [myValue1, setMyValue1] = useState<string>('default value 1');
  const [myValue2, setMyValue2] = useState<string>('default value 2');
  return (
    <MyContext1 value={{value1: myValue1, value2: myValue2}}>
      <MyComponent1 />
    </MyContext1>
  )
}
