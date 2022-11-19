import { FC } from "react";
import { WrapperSection } from "./styles";

interface IProps{
    children?:JSX.Element;
    title?:string;
    content?:string;
}

export const Section:FC<IProps> = ({children,title,content}:IProps) =>{
    return(
        <WrapperSection>
            <h1>{title}</h1>
            <p>
                {content}
            </p>
            {children}
        </WrapperSection>
    );
}