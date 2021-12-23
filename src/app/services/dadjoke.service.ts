import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadjokeService {
  constructor() {}

  async getJoke(): Promise<string> {
    const json = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    });
    const data = await json.json();

    return data.joke;
  }
}
