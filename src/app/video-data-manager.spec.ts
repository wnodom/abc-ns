import { TestBed } from '@angular/core/testing';
import { VideoDataManager } from './video-data-manager';

describe('VideoDataManager', () => {
  let service: VideoDataManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoDataManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
