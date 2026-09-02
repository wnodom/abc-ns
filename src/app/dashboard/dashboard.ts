import { Component, inject } from '@angular/core';
import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { StatFilters } from '../stat-filters/stat-filters';

import { AsyncPipe, JsonPipe } from '@angular/common';
import { VideoDataManager } from '../video-data-manager';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters, AsyncPipe, JsonPipe],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  private readonly svc = inject(VideoDataManager);

  protected readonly videos$ = this.svc.loadVideos();
}
