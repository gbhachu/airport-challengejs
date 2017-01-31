function Airport(){
  this._planes = [];
  };

Airport.prototype.landPlane = function(plane) {
  this._planes.push(plane);
  console.log('This plane has landed')
};

Airport.prototype.takeoffPlane = function(plane) {
  var index = this._planes.indexOf(plane);
  this._planes.splice(index, 1);
  console.log('This plane has taken off')
}
