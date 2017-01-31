function Airport(weather){
  this._planes = [];
  this._weather= weather
  };

Airport.prototype.landPlane = function(plane) {
  if(this._weather.isStormy() === true){
    throw new Error("cannot land: weather is stormy")
  } else {
    this._planes.push(plane);
    console.log('This plane has landed')
  }
};

Airport.prototype.takeoffPlane = function(plane) {
  if(this._weather.isStormy() === true){
    throw new Error("cannot take off: weather is stormy")
  } else {
  var index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
  console.log('This plane has taken off')
  }
}
