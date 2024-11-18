import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeammembersService } from '../services/teammembers.service';
@Component({
  selector: 'app-single-member',
  templateUrl: './single-member.component.html',
  styleUrl: './single-member.component.css'
})
export class SingleMemberComponent implements OnInit {

  members !:any;
  memberId!:any;
  mebName!:any;
  constructor( private member : TeammembersService , private memberID : ActivatedRoute)
  {
    this.members=member.members;
  }
ngOnInit(): void {
  this.memberID.paramMap.subscribe(
    value=>{
      console.log(value);
      this.memberId=value.get('id');
      console.log(this.memberId);
    }
    
  )
   this.mebName=this.members[this.memberId].memberName;
  console.log(this.mebName)

}
}
