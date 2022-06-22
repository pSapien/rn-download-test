import React from 'react';
import { ThemeProvider } from './theme';
import { Home } from './Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
