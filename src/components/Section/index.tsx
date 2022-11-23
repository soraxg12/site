import { FC } from "react";
import { WrapperSection } from "./styles";

interface IProps{
    children?:JSX.Element;
    title?:string;
    content?:string;
    id?: string;
}

export const Section:FC<IProps> = ({children,title,content,id}:IProps) =>{
    return(
        <WrapperSection>
            <h1 id={id}>{title}</h1>
            <p>
                {content}
            </p>
            {children}
        </WrapperSection>
    );
}