function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i += 1) {
    array.push(musicians[i] + ' plays ' + instruments[i]) //concatenation and push method
  }
  return array //return array after the loops are done performing.
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var array = []
  while(i < facts.length) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}