var playlist = {
  Beyonce: "All The Single Ladies"
};


function updatePlaylist(playlist, artistName, songTitle) {
  var updatedPlaylist = Object.assign({}, playlist, {artistName: songTitle})
  return updatePlaylist;
}
