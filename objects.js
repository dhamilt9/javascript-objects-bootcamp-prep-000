var playlist={
  Test: 'Aeroplane'
}

function updatePlaylist(playlist, artistName, songTitle){
  console.log artistName
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
