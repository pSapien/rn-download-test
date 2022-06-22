import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AsyncStorage } from 'react-native';

const defaultTheme = {
  bg: `https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1600`,
};

const lightTheme = {
  bg: `https://images.pexels.com/photos/1266741/pexels-photo-1266741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
};

const darkTheme = {
  bg: `https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
};

const ThemeContext = createContext(defaultTheme);

export function ThemeProvider(props) {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    async function setTheme() {
      // 1. read the key from the AsyncStorage, the theme that was selected
      const selectedTheme = await AsyncStorage.getItem('__theme__');

      // 2. search in the path for the theme
      // 3. read all the image uris,
    }

    setTheme();
  }, []);

  return <ThemeContext.Provider value={theme} {...props} />;
}

export function useTheme() {
  return useContext(ThemeContext);
}
