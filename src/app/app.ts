import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutThisApp } from './about-this-app/about-this-app';

@Component({
  imports: [RouterOutlet, AboutThisApp],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Video Manager');
}
