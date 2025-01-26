import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { SocialModule } from './social/social.module';
import { SongModule } from './song/song.module';


@Module({
  imports: [NoteModule, SocialModule, SongModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
