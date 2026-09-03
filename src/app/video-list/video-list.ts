import { Component, input, output, signal } from '@angular/core';
import { Video } from '../video-types';

@Component({
  imports: [],
  selector: 'ns-video-list',
  styleUrl: './video-list.scss',
  templateUrl: './video-list.html',
})
export class VideoList {
  public readonly videos = input.required<Video[]>();

  public readonly currentVideoChanged = output<Video>();

  protected readonly currentVideo = signal<Video | undefined>(undefined);

  // private readonly currentVideoEffect = effect(() => {
  //   console.log(this.currentVideo());
  // });

  protected updateCurrentVideo(v: Video) {
    this.currentVideo.set(v);

    this.currentVideoChanged.emit(v);
  }
}
