import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { saveAs } from 'file-saver';
import SVGButton from './MySVGComponent.js';

const SVGContainer = ({ children }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    {children}
  </svg>
);

const saveSvg = (svgMarkup, fileName) => {
  const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml' });
  saveAs(svgBlob, fileName);
};

const App = () => {
  const svgMarkup = ReactDOMServer.renderToStaticMarkup(
    <SVGContainer>
      {/* <SVGButton theme="darkWebex" label="Cancel" fill="var(--avatar-presence-icon-busy)" hoverFill="var(--avatar-presence-icon-active)" />
    <SVGButton theme="lightWebex" label="accept" fill="var(--avatar-presence-icon-active)" hoverFill="var(--avatar-presence-icon-busy)" />
    <SVGButton  theme="darkRose" label="Here is a different theme" fill="var(--avatar-presence-icon-active)" hoverFill="var(--avatar-presence-icon-busy)" /> */}
    <SVGButton  theme="darkLavender" label="These SVGs are Dynamic" fill="var(--avatar-color-avatar-background-purple)" hoverFill="var(--avatar-color-avatar-background-violet)" />
    </SVGContainer>
  );

  saveSvg(svgMarkup, 'my-svg-file.svg');

  return <div>SVG file saved!</div>;
};

export default App;