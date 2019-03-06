import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { SampledataList } from './pages/sampledata-list/sampledata-list';
import { AuthGuardService } from './services/authorization/auth-guard.service';
import { HttpinterceptorProvider } from './services/security/httpinterceptor';
import { SampledataRest } from './services/sampledata-rest';
import { SampledataDetail } from './pages/sampledata-detail/sampledata-detail';

export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SampledataList,
    SampledataDetail
  ],
  entryComponents: [
    SampledataDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: translateFactory,
          deps: [HttpClient],
        },
      }),
    FormsModule,
    ComponentsModule
  ],

  providers: [
    AuthGuardService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorProvider,
      multi: true,
    },
    SampledataRest,
    TranslateService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
