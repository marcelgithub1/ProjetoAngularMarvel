import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic/comic.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './series/serie/serie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'serie/:id', component: SerieComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comic/:id', component: ComicComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
