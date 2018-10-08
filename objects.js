var playlist={
  Test: 'Aeroplane'
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}
