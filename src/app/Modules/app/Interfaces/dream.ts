import { User } from "./user";

export interface Dream {
    id?: string;
    title: string;
    content: string;
    user: User;
    tags: string;
    data: Date;
}

export interface DreamFilter{
    uid: string;
}