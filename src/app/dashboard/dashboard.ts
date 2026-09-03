import { Component, inject, signal } from '@angular/core';

import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { StatFilters } from '../stat-filters/stat-filters';

import { VideoDataManager } from '../video-data-manager';
import { Video } from '../video-types';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly videosSignal =
    inject(VideoDataManager).loadVideosAsSignal();

  protected readonly currentVideo = signal<Video | undefined>(undefined);

  protected onVideoChanged(v: Video) {
    this.currentVideo.set(v);
    console.log('Video has changed to ', this.currentVideo());
  }
}
