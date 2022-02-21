import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  
  *, ::after, ::before {
    box-sizing: border-box;
	  margin: 0;
  }

  html, body {
    padding: 0;
    height: 100%;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.idiBackgroundColor};
    text-rendering: optimizeLegibility;
    margin: auto;
    max-width: 1420px;  
	  text-align: left;
  }

  html{
    position: relative;
    min-height: 100%;
    scroll-behavior: smooth;
    font-size: 10px;
    font-color: #000;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
address,
big,
cite,
code,
em,
font,
img,
small,
strike,
sub,
sup,
li,
ol,
ul,
fieldset,
form,
label,
legend,
button,
table,
caption,
tr,
th,
td {
	border: none;
	line-height: inherit;
	margin: 0;
	padding: 0;
	text-align: inherit;
}

small {
    display: block;
}

article {
    font-size: 2rem;
    line-height: 2.5rem;
}

img {
  max-width: 100%;
  height: auto;
}



.neutro {

  color: #000000;

}

.emprendedor { /* codigo wordpress categoría: 2*/
    
  color: #000000;

}

.empresa { /* codigo wordpress categoría: 3*/

  color: #000000;

}

.ayuntamiento { /* codigo wordpress categoría: 20*/

  color: #000000;

}

.centroEducativo { /* codigo wordpress categoría: 85*/

  color: #000000;
  
}

.lee { /* codigo wordpress categoría: 85*/

color: #000;

}

.ite { /* codigo wordpress categoría: 85*/

color: #000;

}

.sas { /* codigo wordpress categoría: 85*/

color: #000;

}

.fic { /* codigo wordpress categoría: 85*/

color: #000;

}

.int { /* codigo wordpress categoría: 85*/

color: #000;

}
  
`