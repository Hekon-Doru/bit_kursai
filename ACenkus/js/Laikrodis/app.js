const dateEl = document.getElementsByClassName('clock-digital__date')[0];
const timeEl = document.getElementsByClassName('clock-digital__time')[0];
const hourEl = document.getElementsByClassName('clock-analog__hours')[0];
const minEl = document.getElementsByClassName('clock-analog__minutes')[0];
const secEl = document.getElementsByClassName('clock-analog__seconds')[0];

console.log(dateEl);
console.log(timeEl);


const weekdays = [
  'Sekmadienis',
  'Pirmadienis',
  'Antradienis',
  'Trečiadienis',
  'Ketvirtadienis',
  'Penktadienis',
  'Šeštadienis',
]

const months = [
  'sausio',
  'vasario',
  'kovo',
  'balandžio',
  'gegužės',
  'birželio',
  'liepos',
  'rugpjūčio',
  'rugsėjo',
  'spalio',
  'lapkričio',
  'gruodžio'
];

function clock() {
  const now = new Date();
  console.clear();
  console.log(now);

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = addZero(h);
  m = addZero(m);
  s = addZero(s);

  let month = now.getMonth();
  let weekday = now.getDay();
  let day = now.getDate();

  timeEl.textContent = h + ':' + m + ':' + s;
  setTimeout(clock, 1000);

  dateEl.textContent = weekdays[weekday] + ', ' + months[month] + ' ' + day + ' d.'
  hourEl.style.transform = 'rotate(' + h * 30 + 'deg)';
  minEl.style.transform = 'rotate(' + m * 6 + 'deg)';
  secEl.style.transform = 'rotate(' + s * 6 + 'deg)';
}

function addZero(t) {
  if (t < 10) {
    t = '0' + t;
  }
  return t;
}

clock();