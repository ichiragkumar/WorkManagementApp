import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
    constructor(private readonly songService: SongService) {}


    @Post('/playlist')
    craetePlayList(@Body() playlistName: string) {
        return this.songService.craetePlayList(playlistName);
    }

    @Get('/playlists')
    getAllPlaylists() {
        return this.songService.getAllPlaylists();
    }

    @Put('/playlists/:id')
    updatePlayListName(@Param('id') playlistId: string) {
        return this.songService.updatePlayListName(playlistId);
    }

    @Delete('/playlists/:id')
    removeSongFromPlaylist(@Param('id') playlistId: string) {
        return this.songService.removeSongFromPlaylist(playlistId);
    }

    @Post('/playlists/:id/song/:songId')
    addSongToPlaylist(
        @Param('id') playlistId: string,
        @Param('songId') songId: string
    ) {
        const songaData = { playlistId, songId };
        return this.songService.addSongToPlaylist(songaData);
    }
    
    @Get('/songs/:id')
    getSongById(@Body() playlistId: string) {
        return this.songService.getSongFromPlaylistById(playlistId);
    }

    @Get("/songs")
    getAllSongs() {
        return this.songService.getAllSongs();
    }
}
