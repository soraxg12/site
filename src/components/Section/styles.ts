import styled from "styled-components";
import { stylesConfigs } from "../../styles/stylesConfigs";

export const WrapperSection = styled.section`
    background:${stylesConfigs.bgWhite};
    padding: 0.4rem;
    margin:5.5rem 1rem;
    box-shadow:${stylesConfigs.borderShadow};
    text-align:center;    

    h1{
        font-size:2.3rem;
    }
    p{
        display:flex;
        line-height:1.8rem;
        font-size:1.2rem;
    }
`