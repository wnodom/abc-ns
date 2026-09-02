import { Component, input } from '@angular/core';
import { Video } from '../video-types';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  public readonly videos = input<Video[] | null>();
}
