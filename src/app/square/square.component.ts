import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls: ['./square.component.css'],
  template: `{{ value }}`,
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O' | null = null;

  ngOnInit(): void {}
}
