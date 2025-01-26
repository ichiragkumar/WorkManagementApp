import { Injectable } from '@nestjs/common';


export interface Note {
    name: string;
    description: string;
    date: string;
}
export const notes = [];
@Injectable()
export class NoteService {

        createNote(note:Note) {
            return {
                msg : "Note Created",
                data : note
            }
        }
        getAllNotes(): string {
            return "All Notes"
        }

        getNoteById(id: string):string {
            return `Note with id ${id} found`;
        }

        updateNote(noteid:string):string {
            return `Note with id ${noteid} updated`;
        }

        deleteNote(noteid: string):string {
            return `Note with id ${noteid} deleted`;
        }

}
