console.log('Labas Projektai');

import Frame from "./Frame";

const tf = document.querySelector('.test-frame');

const f = new Frame(50,12, tf, 'edit');

f.openGates();
f.setActiveColor('crimson');