import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode, reactNode} from "react";
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = () => {
    return (
        <div>
                <h3>{item.name} {item.surname}</h3>
        </div>
    );
};
