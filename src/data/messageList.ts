import { User } from "@/models/user/user.model";
export interface MessageType {
    sender: User;
    message: string;
    timeStamp: string;
    isReceie: boolean;
}

export const messageList: MessageType[] = [
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: true
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: false
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: true
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: false
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: false
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: true
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: false
    },
    {
        sender: {
            username: "Mario",
            profileImage: "/img/userprofile.jpeg"
        },
        message: "Lorem ipsum dolor it set amet pjpp",
        timeStamp: "11:04 pm",
        isReceie: true
    },
]