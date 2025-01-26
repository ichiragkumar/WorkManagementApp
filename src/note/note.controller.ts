import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Note, NoteService } from './note.service';

@Controller('note')
export class NoteController {
    constructor (
        private readonly noteService: NoteService,
    ) {}

    
    @Post("/create")
    createNote(@Body() note: Note) {
        return this.noteService.createNote(note);
    }

    @Get("/all")
    getAllNotes() {
        return this.noteService.getAllNotes();
    }

    @Get("/:id")
    getNoteById(@Param('id') id: string) {
        return this.noteService.getNoteById(id);
    }

    @Put("/update/:id")
    updateNote(@Param('id') id: string) {
        return this.noteService.updateNote(id);
    }

    @Delete("/delete/:id")
    deleteNote(@Param('id') id: string) {
        return this.noteService.deleteNote(id);
    }
}
