var playlist={
  Phil Ochs: "Aeroplane"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { artistName: songTitle })
}
