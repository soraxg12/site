import { FC } from "react";
import { WrapperAcademic } from "./styles";

interface IAcademics {
    nameCourse: string;
    timeDuration?: string;
    link?:string;
}

interface IProps {
    title?: string;
    academics: IAcademics[];
}

export const Academic: FC<IProps> = ({ title, academics }: IProps) => {
    return (
        <WrapperAcademic>
            <h2>{title}</h2>
            {academics.map(academic => {
                return (
                    <ul>
                        <li>
                            <a href={academic.link != null? academic.link : "#"}>
                                {academic.nameCourse}
                                {academic.timeDuration != null 
                                ? ` - ${academic.timeDuration}` 
                                :""}
                            </a>
                        </li>
                    </ul>
                )
            }
            )}
        </WrapperAcademic>
    );
}