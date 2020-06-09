import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members: Member[] = [
    {
      id: '3',
      firstName: 'John',
      lastName: 'Smith',
      type: 'Deactivated Members'
    },
    {
      id: '2',
      firstName: 'Victoria',
      lastName: 'Black',
      type: 'Deactivated Members'
    },
    {
      id: '1',
      firstName: 'Rafal',
      lastName: 'Picasso',
      type: 'Deactivated Members'
    }
  ];
  listMembers: Member[];

  // private editMemberSource = new BehaviorSubject<Member>({ id: '0', firstName: '', lastName: '', type: 'Deactivated Members' });
  // editingMember = this.editMemberSource.asObservable();

  constructor() {
    try {
      this.listMembers = JSON.parse(localStorage.getItem('Members_List'));
    } catch (error) {
      console.log('The list is empty...');
      this.listMembers = [];
    }
  }

  getMembers() {
    return of(this.members);
  }

  getAddedMembers() {
    return of(this.listMembers);
  }

  getMemberById(id: string) {
    const member = this.members.find(member => member.id === id);
    return of(member);
  }

  getListMemberById(id: string) {
    const listMember = this.listMembers.find(listMember => listMember.id === id);
    return of(listMember);
  }

  addMember(member: Member) {
    member.id = String(Number(this.members[0].id) + 1);
    this.members.unshift(member);
    return of(member);
  }

  deleteMember(id: string) {
    this.members = this.members.filter(member => member.id !== id);
    return of(this.members);
  }

  // emitEditTask(member: Member) {
  //   this.editMemberSource.next(member);
  // }

  editMember(member: Member) {
    this.members = this.members.map(item => {
      if (item.id === member.id) {
        item = member;
      }
      return item;
    });
    return of(member);
  }

  saveList(listMembers: Member[]) {
    this.listMembers = listMembers;
    localStorage.setItem('Members_List', JSON.stringify(this.listMembers));
    return of(this.listMembers);
  }
}
