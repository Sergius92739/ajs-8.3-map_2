import Settings from '../settings';

test('Инстанс класса должен содержать корректные данные по умолчанию (без передачи аргументов в конструктор)', () => {
  const test = new Settings();
  const testParams = new Map([
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
  ]);
  const testData = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(test.parameters).toEqual(testParams);
  expect(test.byDefault).toEqual(testData);
  expect(test.byUser).toEqual(testData);
  expect(test.settings).toEqual(testData);
});

test('Данные в инстансе должны соответствовать данным переданным в конструктор', () => {
  const test = new Settings('gray', 'rock', 'hard');
  const testData = new Map([
    ['theme', 'gray'],
    ['music', 'rock'],
    ['difficulty', 'hard'],
  ]);
  const testData1 = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(test.settings).toEqual(testData);
  expect(test.byDefault).toEqual(testData1);
  expect(test.byUser).toEqual(testData);
});

test('Если переданного параметра нет в спике parameters, должен произойти выброс ошибки', () => {
  expect(() => new Settings('red', 'trance', 'easy')).toThrowError('Неверный парамметр "theme"');
  expect(() => new Settings('dark', 'shanson', 'easy')).toThrowError('Неверный парамметр "music"');
  expect(() => new Settings('dark', 'trance', 'between')).toThrowError('Неверный парамметр "difficulty"');
});
