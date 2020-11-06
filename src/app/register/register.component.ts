import { Component, OnInit } from '@angular/core';
import {  UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  // providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register;
  constructor() { }
  ngOnInit(): void { }

}