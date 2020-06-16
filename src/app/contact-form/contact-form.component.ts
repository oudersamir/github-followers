import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  ConatctMethods=[{id:1,method:"phone"},{id:2,method:"email"},{id:3,method:"fix"}]
  constructor() { }

  ngOnInit(): void {
  }

  log(x){
  console.log(x);
  }

  submit(f){
   console.log(f.value);
  }

}
