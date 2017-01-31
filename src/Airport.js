function Airport(){
  this._planes = [];
  };

Airport.prototype.landPlane = function(plane) {
  this._planes.push(plane);
}
