import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'packet-form',
  templateUrl: 'packet-new.component.html',
  styleUrls: [ 'packet-new.component.scss' ]
})
export class PacketNewComponent {
  // isOpen: boolean;
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  // ngOnInit() {
  //   this.isOpen = true;
  // }

}
