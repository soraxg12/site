import styled, { keyframes } from "styled-components";
import { stylesConfigs } from "../../styles/stylesConfigs";

const lineExpand = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const WrapperHeader = styled.header`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    background-color:${stylesConfigs.bgWhite};
    position:absolute;
    top:0;
    width:100%;
    height: 70px;
    z-index:0;

    ul{
        list-style:none;

        li{
            padding:.5rem;
            float:left;

            a{
                color:${stylesConfigs.primaryColor}
            }
            div
            {
                height:3px;
                border-radius:50px;
            }

            &:hover{
                div{
                    animation: ${lineExpand} 400ms linear;
                    background:${stylesConfigs.primaryColor};
                }
            }
        }
    }
`