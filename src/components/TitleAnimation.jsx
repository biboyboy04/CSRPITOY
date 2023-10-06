import{ useEffect, useState } from 'react';

const TitleAnimation = () => {
    const text = "AESOP FABLES"; // The text you want to animate
    const delay = 200; // Delay in milliseconds between each character
    
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let index = 0;
      let timerId;
        
      const typeNextCharacter = () => {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(index));
          index++;
          timerId = setTimeout(typeNextCharacter, delay);
        }
      };
  
      typeNextCharacter();
  
      return () => {
        // Cleanup function to clear the timeout on unmount
        clearTimeout(timerId);
      };
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    return <h1 id="typewriter">{displayText}</h1>;
}

export default TitleAnimation
