import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @Input() title: string;
  @Input() seeAll: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  haveSeeAll() {
    if (!this.seeAll) {
      return 'p-1 flex flex-wrap gap-6 items-start';
    }
    return 'scrollBar flex gap-6 items-start';
  }
}
