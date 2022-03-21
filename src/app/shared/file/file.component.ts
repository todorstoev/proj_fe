import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  constructor() {}

  @Output() onFileUploaded = new EventEmitter<File>();

  onFileUploadHandler(event: Event) {
    const { target } = event;
    const { files } = target as HTMLInputElement;
    if (files?.length && files?.length > 0) this.onFileUploaded.emit(files[0]);
  }

  ngOnInit(): void {}
}
