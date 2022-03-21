import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', [Validators.required]],
    file: ['', [Validators.required]],
  });

  contries: string[] = ['United States', 'United Kingdom', 'Germany'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  attachFileToForm(file: File) {
    if (file) {
      this.homeForm.get('file')?.setValue(file);
    }
  }

  onSubmit(): void {
    console.log('Your order has been submitted', this.homeForm.valid);
    console.log(this.homeForm.errors);
    // this.homeForm.reset();
  }
}
