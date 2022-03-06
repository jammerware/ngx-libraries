[![npm version](https://badge.fury.io/js/ngx-keyboard-events.svg)](https://badge.fury.io/js/ngx-keyboard-events)

# NgxKeyboardEvents
This is a simple [Angular](https://angular.io) module to bring an easy way to listen to keyboard events in a modularized way consistent with Angular's style.

Right now, `ngx-keyboard-events` assumes that you're using Angular in a browser environment. Angular has changed a lot since I started using it, so I'm pretty sure this is a terrible assumption. If you're using it elsewhere and want to offer some recommendations on how to make this library more friendly to other environments, open an issue!

## Getting started

**Install the package**
```bash
npm i ngx-keyboard-events
```

**app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxKeyboardEventsModule } from 'ngx-keyboard-events';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxKeyboardEventsModule, // import the module
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

**some.component.ts**
```typescript
import { Component, OnInit } from '@angular/core';
import { NgxKeyboardEventsService, NgxKeyboardEvent } from 'ngx-keyboard-events';

@Component({
    selector: 'ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ngx';

    constructor(private keyboardEventsService: NgxKeyboardEventsService) { }

    ngOnInit() {
        this.keyboardEventsService.onKeyPressed.subscribe((keyEvent: NgxKeyboardEvent) => {
            console.log('key event', keyEvent);
        });
    }
}
```