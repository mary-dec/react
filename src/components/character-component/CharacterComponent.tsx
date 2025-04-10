import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";
interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComent = ({item, children}: CharacterComponentProps)
return (
        <div className='my-10 border-2'>
                <h3 className='text-2xl'>{item.name} {item.surname}</h3>
                <p>children</p>
        </div>
    );

