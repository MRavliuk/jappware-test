import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MembersService } from '../../services/members.service';

import { Member } from '../../models/member';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  memberId: string;
  member: Member;

  constructor(
    public membersService: MembersService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.memberId = this.activatedRoute.snapshot.params['id'];
    this.membersService.getMemberById(this.memberId).subscribe((member: Member) => this.member = member);
  }

  editMember() {
    const updateMember = Object.assign({}, this.member);
    this.membersService.editMember(updateMember).subscribe((member: Member) => {
      if (member) {
        this.router.navigate(['/panel']);
      }
    });
  }

}
