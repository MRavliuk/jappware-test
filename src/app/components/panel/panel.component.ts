import { Component, OnInit, ViewChild } from '@angular/core';

import { Inject } from '@angular/core';

import { MembersService } from '../../services/members.service';

import { Member } from '../../models/member';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @ViewChild('form') form;
  isAdding: boolean = false;

  members: Member[];
  listMembers: Member[] = [];

  currentListMember: number;
  isStatus: boolean = true;
  memberNewStatus: string;

  invitedMembers: number = 0;
  activeMembers: number = 0;

  constructor(
    // public membersService: MembersService
    // or like bellow
    @Inject(MembersService) public membersService
  ) { }

  ngOnInit(): void {
    this.membersService.getMembers().subscribe((members: Member[]) => this.members = members);
    this.membersService.getAddedMembers().subscribe((listMembers: Member[]) => this.listMembers = listMembers);
  }

  ngDoCheck(): void {
    this.countMembers();
    this.members.forEach((member, index) => {
      console.log(member, index);
      this.listMembers.forEach(listMember => {
        if ((member.firstName === listMember.firstName) && (member.lastName === listMember.lastName) && (member.id) === (listMember.id)) {
          return this.members.splice(index, 1);
        }
      });
    });
  }

  deleteMember(id) {
    this.membersService.deleteMember(id).subscribe(data => {
      this.members = this.members.filter(member => member.id !== id);
    });
  }

  editMember(member: Member) {
    this.membersService.emitEditTask(member);
  }

  addMemberToList(member: Member) {
    // this.members = this.members.filter(memberItem => memberItem.id !== member.id);
    this.listMembers.unshift(member);
  }

  removeFromList(index: number) {
    this.members.unshift(this.listMembers[index]);
    return this.listMembers.splice(index, 1);
  }

  editStatus() {
    this.listMembers[this.currentListMember].type = this.memberNewStatus;
    this.form.reset();
  }

  countMembers() {
    let count: number = 0;
    this.invitedMembers = this.listMembers.length;
    this.listMembers.forEach(element => {
      if (element.type === 'Full Members') {
        count++;
        return this.activeMembers = count;
      }
    });
    this.membersService.saveList(this.listMembers);
    console.log(localStorage);
  }

  clearList() {
    this.listMembers.forEach(member => {
      this.members.unshift(member);
    });
    this.listMembers.length = 0;
  }

  identify(index) {
    return index;
  }

}
