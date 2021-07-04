export default class Settings {
  constructor(theme = 'dark', music = 'trance', difficulty = 'easy') {
    this.parameters = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    if (!this.parameters.get('theme').includes(theme)) {
      throw new Error('Неверный парамметр "theme"');
    }
    if (!this.parameters.get('music').includes(music)) {
      throw new Error('Неверный парамметр "music"');
    }
    if (!this.parameters.get('difficulty').includes(difficulty)) {
      throw new Error('Неверный парамметр "difficulty"');
    }

    this.byDefault = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.byUser = new Map([
      ['theme', theme],
      ['music', music],
      ['difficulty', difficulty],
    ]);
  }

  get settings() {
    return new Map([...this.byDefault, ...this.byUser]);
  }
}
