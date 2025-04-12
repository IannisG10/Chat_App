import { UserType } from "./user"

export interface MessageType {
    sender: UserType;
    message: string;
    timeStamp: string;
    isReceie: boolean;
}