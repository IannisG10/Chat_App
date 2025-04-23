import { UserType } from "./user"
import { User } from "@/models/user/user.model";

export interface MessageType {
    sender: User;
    message: string;
    timeStamp: string;
    isReceie: boolean;
}