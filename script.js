
function countLetters(input) {
  const vietnamLetters = ['ă', 'â', 'đ', 'ê', 'ô', 'ơ', 'ư'];
  const telexs = {
    'aw': 'ă',
    'aa': 'â',
    'dd': 'đ',
    'ee': 'ê',
    'oo': 'ô',
    'ow': 'ơ',
    'w': 'ư'
  };
  let count = 0;
  let arrayValueCount = [];

  for (let i = 0; i < input.length - 1; i++) {
    const telexOne = input.substr(i, 1);
    const telexTwo = input.substr(i, 2);

    if (telexTwo in telexs) {
      const vietnamLetter = telexs[telexTwo];
      if (vietnamLetters.includes(vietnamLetter)) {
        count++;
        i++;
        arrayValueCount.push(telexTwo)
      }

    } else if (telexOne in telexs) {
      const vietnamLetter = telexs[telexOne];
      if (vietnamLetters.includes(vietnamLetter)) {
        count++;
        arrayValueCount.push(telexOne)
      }
    }
  }

  return `${count} (${arrayValueCount})`
}
const input = 'hfdawhwhcoomdd';
const output = countLetters(input);
console.log("Input:", input);
console.log("Output:", output);


