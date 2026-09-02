import { Component, inject } from '@angular/core';

import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { StatFilters } from '../stat-filters/stat-filters';

import { VideoDataManager } from '../video-data-manager';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  protected readonly videosSignal =
    inject(VideoDataManager).loadVideosAsSignal();
}
