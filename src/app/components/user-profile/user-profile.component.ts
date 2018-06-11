import { Component, OnInit, TemplateRef } from '@angular/core';

import { AuthService } from "../../services/auth.service";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;

  constructor(
    private modalService: BsModalService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

    // MODAL
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    }
   
    confirm(): void {
      this.auth.logOut();  
      this.message = 'Confirmed!';
      this.modalRef.hide();
    }
   
    decline(): void {
      this.message = 'Declined!';
      this.modalRef.hide();
    }

}
