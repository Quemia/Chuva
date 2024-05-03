import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppResume } from './resume/resume.component';
import { Discussions } from './discussions/discussions.component';
import { Toolbar } from './toolbar/toolbar';
import { Details } from './details/details';
import { Presentation } from './presentation/presentation';
import { Comment } from './comment/comment';
import { NewComment } from './newcomment/new.comment';

@NgModule({
  declarations: [
    AppComponent,
    AppResume,
    Discussions,
    Toolbar,
    Details,
    Presentation,
    Comment,
    NewComment,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
