import { createContext } from 'react';

// 1st arg is state, 2nd arg is updater, same structure as a hook
// 1st arg is never used as value passed in in App.js overrides it
// 2nd arg is placeholder function which will be called if no provider
// above it, but in theory should never be called.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;