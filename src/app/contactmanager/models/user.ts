import { Note } from "./note";

export class User {
    id: number;
    birthDate: Date;
    name: String;
    avatar: string;
    bio: String;

    notes: Note[] = [];
}

