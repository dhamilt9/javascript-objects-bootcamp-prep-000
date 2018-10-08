var playlist={
  RHCP: "Aeroplane"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { artistName: songTitle })
}
