import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './downloadSVGapp.js'
import reportWebVitals from './reportWebVitals';
import SVGButton from './MySVGComponent';
import '@momentum-ui/design-tokens/dist/index.css';
import MyMomentumComponent from './MyMomentumComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyMomentumComponent />
    
      <SVGButton theme="darkWebex" label="Cancel" fill="var(--avatar-presence-icon-busy)" hoverFill="var(--avatar-presence-icon-active)" />
    <SVGButton theme="lightWebex" label="accept" fill="var(--avatar-presence-icon-active)" hoverFill="var(--avatar-presence-icon-busy)" />
    <SVGButton  theme="darkRose" label="Here is a different theme" fill="var(--avatar-presence-icon-active)" hoverFill="var(--avatar-presence-icon-busy)" />
    <SVGButton  theme="darkLavender" label="These SVGs are Dynamic" fill="var(--avatar-color-avatar-background-purple)" hoverFill="var(--avatar-color-avatar-background-violet)" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
