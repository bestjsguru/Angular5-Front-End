import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Language, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /**
   * This is necessary when we use component specific stylesheets. If you do not
   * have this line, your local styles will not be applied to the view.
   */
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  @Language() lang: string;
  title = 'app';

  constructor(
    public translationService: TranslationService
  ) { }

  public ngOnInit() {
    console.log('Initializing the app component');
  }

  public ngOnDestroy() {
    console.log('Destroying the app component');
  }
}
