var playlist = {
  Beyonce: "All The Single Ladies"
};


function updatePlaylist(obj, value, key) {
  return Object.assign({}, obj, [value: key]);
}