import { inject, Service } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Service()
export class VideoDataManager {
  http = inject(HttpClient);

  private uppercaseAllAuthorNames(a: any) {
    return a.map((o: any) => ({
      ...o,
      author: o.author.toUpperCase(),
    }));
  }

  loadVideos() {
    return this.http.get('https://api.angularbootcamp.com/videos').pipe(
      tap((something) => console.table(something)),
      map(this.uppercaseAllAuthorNames.bind(this)),
      tap((something) => console.table(something)),
    );
  }
}
