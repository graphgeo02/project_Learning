// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom";
// //import './index.css'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { RecoilRoot } from 'recoil';
// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <React.StrictMode>
      {/*router step one*/}
//       <RecoilRoot>
//       <BrowserRouter>
//       <App />
//       </BrowserRouter>
//       </RecoilRoot>
//   </React.StrictMode>
// );

 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import App from './App.jsx';
 import { BrowserRouter } from 'react-router-dom';
 import { RecoilRoot } from 'recoil';
 import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RecoilRoot>
       <BrowserRouter>
         <App />
      </BrowserRouter>
     </RecoilRoot>
   </React.StrictMode>
);
