import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutThisApp } from './about-this-app/about-this-app';
import { GiveMeHelp } from './give-me-help/give-me-help';

@Component({
  imports: [RouterOutlet, AboutThisApp, GiveMeHelp],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Video Manager');
}
