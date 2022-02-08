import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardHomeComponent } from './home/card-home/card-home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comics/comic/comic.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './series/serie/serie.component';
import { CardItemComponent } from './shared/card-item/card-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardHomeComponent,
    CharactersComponent,
    CharacterComponent,    
    ComicsComponent,
    ComicComponent,
    EventsComponent,
    EventComponent,
    SeriesComponent,
    SerieComponent,
    CardItemComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
