import { Component } from '@angular/core';
import { VideoList } from '../video-list/video-list';
import { VideoPlayer } from '../video-player/video-player';
import { StatFilters } from '../stat-filters/stat-filters';

@Component({
  imports: [VideoList, VideoPlayer, StatFilters],
  selector: 'ns-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {}
