import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeammembersService {

  constructor() { }
  members:Array<any>=[
    {memberName : ' Donnn',
    memberRole : 'Product, VP',
    memberImg :'../../assets/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg',
    memberDesc : "Over three years in business had the chance to work on variety of projects, with companies"
    },
    {memberName : ' Kelly',
    memberRole : 'Marketing',
    memberImg :'../../assets/people/portrait-british-woman.jpeg',
    memberDesc : "Over three years in business had the chance to work on variety of projects, with companies"

    },
    {memberName : 'Hop',
    memberRole : 'Founder',
    memberImg :'../../assets/people/beautiful-woman-face-portrait-brown-background.jpeg',
    memberDesc : "Over three years in business had the chance to work on variety of projects, with companies"

    }
  ]
}
