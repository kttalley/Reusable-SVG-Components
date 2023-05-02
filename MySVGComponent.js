import React, { useState, useRef, useEffect } from 'react';
import '@momentum-ui/design-tokens/dist/index.css';

//define base button component as an svg <symbol 
//thi which consumes a label string and generates an ID based off of it.
const BaseButton = ({ label, fill, hoverFill, theme }) => {
    const textRef = useRef(null);
    //dynamically resize button based on string length
  useEffect(() => {
    const textWidth = textRef.current.getBBox().width;
    const rect = textRef.current.parentNode.querySelector('rect');
    rect.setAttribute('width', textWidth + 16);
  }, [label]);
    
    return (
            <symbol className={`md-theme-${theme}`} id={`button-${label}`}   >
            <rect x="0" y="0" rx="15" height="1.8rem" style={{fill:`${fill}`}} />
            <text ref={textRef} x="8" y="16" dominantBaseline="middle" textAnchor="" style={{fill: 'var(--theme-text-primary-normal)', fontSize: '1rem'}}>{label}</text>
            </symbol>  
    );
}

const SVGButton = ({ label, fill, hoverFill, theme }) => {
    const svgRef = useRef(null);

//   useEffect(() => {
//     // Get the bounding box of the content inside the SVG element
//     const bbox = svgRef.current.getBBox();
    
//     // Set the viewBox attribute to fit the content
//     svgRef.current.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
//   }, [label]);
    
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
      alert(`Button "${label}" clicked!`);
    }
  
    const handleMouseEnter = () => {
      setIsHovered(true);
      console.log(`Button "${label}" is hovered!`)
    }
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      console.log(`Button "${label}" is nolonger hovered!`)
    }
    return (
        <svg ref={svgRef} className={`md-theme-${theme}`}  >
        <defs>
          <BaseButton label={label} />
        </defs>
        <use 
          href={`#button-${label}`}
        //   style={{ fill: isHovered ? 'var(--avatar-presence-icon-busy)' : 'var(--avatar-presence-icon-active)' }}
        //   style={{ fill: isHovered ? `var(${hoverFill})` : `var(${fill})` }}
        style={{ fill: isHovered ? hoverFill : fill }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        />
      </svg>
    );
}

export default SVGButton;