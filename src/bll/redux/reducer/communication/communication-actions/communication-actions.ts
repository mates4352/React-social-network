import {Actions_Type} from "../../Actions-Type";
import {v1} from "uuid";

export const addTextMessage = (text: string) => (
    {type: Actions_Type.ADD_MESSAGE, newMessage: {id: v1(), text}} as const
)
