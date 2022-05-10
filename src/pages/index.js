import * as React from "react"
import styled, {createGlobalStyle} from 'styled-components';
import ExapndingVideo from "../components/expandingVideo/ExapndingVideo";
import ExpandingBanner from "../components/expandingBanner/ExpandingBanner";

const GlobalStyles = createGlobalStyle`
	html {
overflow-y: auto;
overflow-x: hidden;
}
body {
width: 100%;
padding: 0;
margin: 0;
overflow: hidden;
background-color: white;
-webkit-tap-highlight-color: transparent;
}

button {
&:focus {
outline: none;
}
}

a {
&:focus {
outline: none;
}
}

*, *::before, *::after{
box-sizing: border-box;
}


*::placeholder {
}

h1, h2, h3, h4, h5, h6 {
margin: 0;
padding: 0;
}

p {
margin: 0;
padding: 0;
}

ul {
list-style-type: none;
padding: 0;
margin: 0;
}
`;
	


const StyledEmptyModule = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: indianred;
	border: 2px solid indigo;

`

const IndexPage = () => {
  return (<>
		  <GlobalStyles/>
		  <ExpandingBanner/>
	    <StyledEmptyModule/>
	    <StyledEmptyModule/>
	    <ExapndingVideo/>
	    <StyledEmptyModule/>
	    </>

  )
}

export default IndexPage
