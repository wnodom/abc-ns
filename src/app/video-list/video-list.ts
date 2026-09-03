import { Component, effect, input, signal } from '@angular/core';
import { Video } from '../video-types';

@Component({
  imports: [],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  public readonly videos = input.required<Video[]>();

  protected readonly currentVideo = signal<Video | undefined>(undefined);

  private readonly currentVideoEffect = effect(() => {
    console.log(this.currentVideo());
  });
}
