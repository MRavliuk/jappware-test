import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MembersService } from '../../services/members.service';

import { Member } from '../../models/member';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements OnInit {

  @Input() member: Member;
  @Input() isAdding: boolean;
  @Input() isAlreadyAdded: boolean;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() add = new EventEmitter();
  

  constructor(
    public membersService: MembersService
  ) { }

  ngOnInit(): void {
    console.log(this.isAdding);
  }

  ngOnDestroy(): void {
    // console.log('DELETED!');
  }

  deleteOneMember() {
    this.delete.emit(this.member.id);
  }

  editMember() {
    const updateMember = Object.assign({}, this.member);
    this.edit.emit(updateMember);
  }

  addToList() {
    // this.isAlreadyAdded = true;
    const addMember = Object.assign({}, this.member);
    this.add.emit(addMember);
  }

}
