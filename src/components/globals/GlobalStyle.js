import { createGlobalStyle } from "styled-components"
import { setColor, setFont } from "../../styles"

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Poiret+One&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${setColor.primaryDark};
    background: ${setColor.primaryWhite};
    font-size: 100%;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    width: 0.4em;
  }

  body::-webkit-scrollbar-track {
    background: ${setColor.bgColor};
  }

  body::-webkit-scrollbar-thumb {
    background: ${setColor.mainBlue};
  }

  h1 {
    font-size: 3em;
    line-height:1.2;
    margin-bottom:0.5em;
    ${setFont.header};
  }
  h2 {
    font-size: 2em;
    margin-bottom:0.75em;
    ${setFont.header};
  }
  h3 {
    font-size: 1.5em;
    line-height:1;
    margin-bottom:0.5em;
    ${setFont.header};
  }
  h4 {
    font-size: 1.2em;
    line-height:1.2;
    margin-bottom:1.25em;
    font-weight:bold;
    ${setFont.header};
  }
  h5 {
    font-size: 1em;
    margin-bottom:1.5em;
    font-weight:bold;
    ${setFont.header};
  }

  h6 {
    font-size: 1em;
    font-weight:bold;
    ${setFont.paragraph};
  }

  p {
    line-height: 1.3;
    margin: 0 0 0 0;
    ${setFont.paragraph};
  }
`
export default Globals
