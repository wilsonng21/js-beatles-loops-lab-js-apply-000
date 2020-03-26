function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i += 1) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}