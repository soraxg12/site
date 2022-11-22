import styled from "styled-components";

export const WrapperContacts = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;

   div{
        display:flex;
        align-items:baseline;
   }

   @media(max-width: 400px){
        font-size:14px;
        p{
            font-size:14px;
        }
   }
`

export const WrapperIcons = styled.div`
    display:flex;
    flex-direction:row;
    padding:10px;

    svg{
        padding:10px;
        width:50px;
        height:50px;
    }
`