import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-headers',
  templateUrl: './form-headers.component.html',
  styleUrls: ['./form-headers.component.scss'],
})
export class FormHeadersComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() { }


}
