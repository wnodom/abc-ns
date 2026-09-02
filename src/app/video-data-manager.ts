import { inject, Service } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Service()
export class VideoDataManager {
  http = inject(HttpClient);

  loadVideos() {
    return this.http.get('https://api.angularbootcamp.com/videos');
  }
}
