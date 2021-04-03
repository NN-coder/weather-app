const alphabet: { [l: string]: string } = {
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'YO',
  Ж: 'ZH',
  З: 'Z',
  И: 'I',
  Й: 'Y',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'H',
  Ц: 'C',
  Ч: 'CH',
  Ш: 'SH',
  Щ: 'SHCH',
  Ъ: '',
  Ы: 'Y',
  Ь: '',
  Э: 'E',
  Ю: 'YU',
  Я: 'YA',
};

Object.entries(alphabet).forEach(([cyrillicLetter, latinLetter]) => {
  alphabet[cyrillicLetter.toLowerCase()] = latinLetter.toLowerCase();
});

export const transliterate = (word: string) =>
  [...word].map((letter) => alphabet[letter] ?? letter).join('');
