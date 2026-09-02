import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { Video } from './video-types';

@Service()
export class VideoDataManager {
  http = inject(HttpClient);

  private uppercaseAllAuthorNames(videos: Video[]) {
    return videos.map((v: Video) => ({
      ...v,
      author: v.author.toUpperCase(),
    }));
  }

  loadVideos() {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(
        tap((data) => console.table(data)),
        map(this.uppercaseAllAuthorNames.bind(this)),
        tap((data) => console.table(data)),
      );
  }
}
