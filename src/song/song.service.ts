import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
        craetePlayList(playlistName:string) {
            return {
                msg : "Playlist Created",
                data : playlistName
            }
        }

        getAllPlaylists(): string {
            return "All Playlists"
        }

        updatePlayListName(playlistId:string):string {
            return `Playlist with id ${playlistId} updated`;
        }

        removeSongFromPlaylist(playlistId: string):string {
            return `song with id ${playlistId} deleted`;
        }

    
        addSongToPlaylist(songaData: { playlistId: string; songId: string }): string {
            return `Song with id ${songaData.songId} added to playlist {playlistId: ${songaData.playlistId}}`;
        }
        

        getSongFromPlaylistById(playlistId: string):string {
            return `Song with id ${playlistId} found`;
        }


        getAllSongs(): any {
            const allSongs = [
                {
                    id: 1,
                    name: "song1",
                    description: "song1 description",
                    date: "2022-01-01",
                },
                {
                    id: 2,
                    name: "song2",
                    description: "song2 description",
                    date: "2022-01-02",
                },
                {
                    id: 3,
                    name: "song3",
                    description: "song3 description",
                    date: "2022-01-03",
                },
            ];

            return {                
                msg : "Songs Found",
                data : allSongs
            }
    
        }





}
