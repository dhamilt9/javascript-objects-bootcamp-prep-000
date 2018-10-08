var playlist={
  Test: 'Aeroplane'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist=Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}
