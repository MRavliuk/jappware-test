import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MembersService } from '../../services/members.service';

import { Member } from '../../models/member';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  member: Member = {
    id: '',
    firstName: '',
    lastName: '',
    type: 'Deactivated Members'
  }

  constructor(
    public membersService: MembersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addMember() {
    this.membersService.addMember(this.member).subscribe(data => {
      this.router.navigate(['/panel']);
    });
  }

}
