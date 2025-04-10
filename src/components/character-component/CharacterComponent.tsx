import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComent = ({item, children}: CharacterComponentProps)
   return (
        <div>
                <h3>{item.name} {item.surname}</h3>
                <p>children</p>
        </div>
    );

