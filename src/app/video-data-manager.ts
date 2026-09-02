import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { Video } from './video-types';
import { toSignal } from '@angular/core/rxjs-interop';

@Service()
export class VideoDataManager {
  private readonly http = inject(HttpClient);

  private uppercaseAllAuthorNames(videos: Video[]) {
    return videos.map((v: Video) => ({
      ...v,
      author: v.author.toUpperCase(),
    }));
  }

  public loadVideosAsSignal() {
    return toSignal(inject(VideoDataManager).loadVideos(), {
      initialValue: [],
    });
  }

  public loadVideos() {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(
        tap((data) => console.table(data)),
        map(this.uppercaseAllAuthorNames.bind(this)),
        tap((data) => console.table(data)),
      );
  }
}
