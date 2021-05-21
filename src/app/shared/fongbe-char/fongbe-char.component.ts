import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-fongbe-char',
  templateUrl: './fongbe-char.component.html',
  styleUrls: ['./fongbe-char.component.scss'],
})
export class FongbeCharComponent implements OnInit {
  @Input() characters: [];
  @Output() charTap = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  charClick(char){
    this.charTap.emit(char);
  }

}
