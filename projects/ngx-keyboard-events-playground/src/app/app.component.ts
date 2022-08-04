import { Component } from '@angular/core';
import { NgxKeyboardEventsService } from 'projects/ngx-keyboard-events/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-keyboard-events-playground';

  constructor(private keyboard: NgxKeyboardEventsService) { }

  ngOnInit() {
    this.keyboard.onKeyUp$.subscribe(keyEvent => {
      console.log("KeyEvent", keyEvent);
    })
  }
}
