import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  constructor() {}
  @ViewChild('file') file!: ElementRef<HTMLInputElement>;

  @Output() onFileUploaded = new EventEmitter<File>();

  fileName: string = 'No file selected';

  onFileUploadHandler(event: Event) {
    const { target } = event;
    const { files } = target as HTMLInputElement;

    if (files?.length && files?.length > 0) {
      this.fileName = files[0].name;
      this.onFileUploaded.emit(files[0]);
    }
  }

  onClick(e: Event) {
    e.preventDefault();
    e.stopPropagation()
    this.file.nativeElement.click();
  }

  ngOnInit(): void {}
}
