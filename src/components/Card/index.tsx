import { FC } from "react"
import { WrapperCard } from "./styles";

interface IProps{
    children:JSX.Element;
}

export const Card:FC<IProps> = ({children}:IProps) =>{
    return(
        <WrapperCard>
            {children}
        </WrapperCard>
    );
}