import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { configureStore } from "./store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#82b1ff',
      main: '#448aff',
      dark: '#2962ff',
    },
    secondary: {
      light: '#ff8a80',
      main: '#d50000',
      dark: '#b71c1c'
    }
  }
})
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <DndProvider backend={Backend}>
        <App />
      </DndProvider>
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
