import styled  from "styled-components";


const HeaderStyle = styled.header`
display:flex;
justify-content: center;
background-color:#f3c2ef;
margin-bottom: 30px;

ul{
    display:flex;
    justify-content: space-between;
}
li{
    list-style:none;
    margin: 0 10px;
}
a{
    color:black;
    text-decoration:none;
    display:block;
    font-size:18px;   
}

`

export default HeaderStyle;