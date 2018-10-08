var playlist={
  RHCP: "Aeroplane"
}

function updatePlaylist(playlist, artist, song){
  Object.assign(playlist, {artist: song})
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
}
