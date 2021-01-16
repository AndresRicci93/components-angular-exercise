import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreation = 'No server was created!';
  serverName;
  username: string = "Andres"
 
  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    },4000)

  }

  ngOnInit(): void {
  }

 onCreateServer() {

  this.serverCreation =  this.serverCreation = 'Server was created ' + this.serverName;
 }


 resetUsername(event: Event) {
 
  console.log(this.username)


   if (this.username.length > 0) {
   this.username = '';
   }

 }
   



onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}





}
