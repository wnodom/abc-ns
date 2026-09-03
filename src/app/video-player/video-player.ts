import { Component, input } from '@angular/core';
import { Video } from '../video-types';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'ns-video-player',
  styleUrl: './video-player.scss',
  templateUrl: './video-player.html',
})
export class VideoPlayer {
  public readonly video = input.required<Video | undefined>();
}
