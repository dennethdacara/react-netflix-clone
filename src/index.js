import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebaseInit as firebase } from './lib/firebase.dev';
import { FirebaseContext } from './context/firebase';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>
);