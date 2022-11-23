import { WrapperHeader } from "./styles"

export const Header = () => {
    return(
        <WrapperHeader>
            <ul>
                <li>
                    <a href="#information">Informações</a>
                    <div></div>
                </li>
                <li>
                    <a href="#sobre-mim">Sobre mim</a>
                    <div></div>
                </li>
                <li>
                    <a href="#academics">Formações</a>
                    <div></div>
                </li>
                <li>
                    <a href="#Skills">Habilidades</a>
                    <div></div>
                </li>
            </ul>
        </WrapperHeader>
    )
}