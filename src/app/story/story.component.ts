import { Component, OnInit } from '@angular/core';
import { TeammembersService } from '../services/teammembers.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {
  Members !:Array<any>;
  active :boolean=false;
  mem !:any;
  constructor(private teammembersService: TeammembersService , private memberss : ActivatedRoute) { 
    this.Members=teammembersService.members;
   
  }
  ngOnInit(): void {

 
    window.scrollTo(0, 0); // Scroll to the top
  console.log(this.Members);
 
  }
  isActivated()
  {
    this.active=true;
  }

}

