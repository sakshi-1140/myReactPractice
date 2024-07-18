import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './Context1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider value={{name:"accioJob", id:123}}>
 <App />
</Provider>
);
