// Import styled components
import styled from 'styled-components'

// We dont need React to create components, it needs a name. Set it equal to "styled" followed by the html element you want in DOM. After, whatever CSS we make below styled.button will be applied to Example Button. BACKTICKS
export const ExampleButton = styled.button`
background:green;
color: orange;
font-size:2rem;
`

// Once the BUTTON is created, we can use it anywhere we want. 