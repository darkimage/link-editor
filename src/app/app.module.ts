import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgScrollbarModule,SmoothScrollModule } from 'ngx-scrollbar';
import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AngularSplitModule } from 'angular-split';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './components/editor/editor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGripVertical,
  faFileImport,
  faFileUpload,
  faFileCode,
  faColumns,
  faMinusSquare,
  faPlusSquare,
  faAlignLeft,
  faEye,
  faEyeSlash,
  faExclamationTriangle,
  faRedoAlt
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faGripVertical,
  faFileImport,
  faFileUpload,
  faFileCode,
  faColumns,
  faMinusSquare,
  faPlusSquare,
  faAlignLeft,
  faEye,
  faEyeSlash,
  faExclamationTriangle,
  faRedoAlt
);

import {
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatChipsModule,
  MatButtonModule,
  MatSelectModule
} from '@angular/material';

import { DragDropModule} from '@angular/cdk/drag-drop';
import { ItemComponent } from './components/item/item.component';
import { DropContainerComponent } from './components/drop-container/drop-container.component';
import { DropDirective } from './directives/drop.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MarkdownModule } from 'ngx-markdown';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { ItemEditorComponent } from './components/item-editor/item-editor.component';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}" tittle="${title}" target="_blank">${text}</a>`;
  };

  return {
    renderer: renderer
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    EditorComponent,
    ItemComponent,
    DropContainerComponent,
    DropDirective,
    ToolbarComponent,
    ItemEditorComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    SmoothScrollModule,
    MatToolbarModule,
    NgScrollbarModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    DragDropModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSplitModule.forRoot(),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
