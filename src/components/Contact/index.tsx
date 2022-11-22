import { FC } from "react";
import { WrapperContacts, WrapperIcons } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BsGithub,BsLinkedin } from "react-icons/bs";

export const Contacts:FC = () =>{
    return(
        <WrapperContacts>
                <div>
                    <h3>Nome: </h3>
                    <p> Felipe Alvarenga teixeira</p>
                </div>
                <div>
                    <h3>Email: </h3>
                    <p>felipealvarengateixeira@gmail.com</p>
                </div>
            <WrapperIcons>
                <a href="https://github.com/soraxg12" target={"_blank"}>
                    <BsGithub color="#213547"/>
                </a>
                <a href="https://www.linkedin.com/in/felipe-alvarenga-16984b1b0/" target={"_blank"}>
                    <BsLinkedin color="#213547"/>
                </a>
            </WrapperIcons>
        </WrapperContacts>
    )
}