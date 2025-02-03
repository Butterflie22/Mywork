import { Component } from '@angular/core';
import { Content1Component } from '../content1/content1.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [Content1Component,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
