import styled, {css} from "styled-components";

const MyButton = styled.button`
 background : #fff;
 border-radius: 5px;
 padding:10px;
 color: #000;
 border: 1px solid #ccc;
  ${props => props.increment && css `
      background: green;
      color: #fff;
      // margin:50px;
     `
  }
  ${props => props.reset && 
    css `
      background: yellow;
     `
  }
  ${props => props.decrement && 
    css `
      background: red;
     `
  }

`

export default MyButton;