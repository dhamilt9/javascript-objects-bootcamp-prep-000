var playlist={
  Test: 'Aeroplane'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
}

function removeFromPlaylist(a, b){
  delete a.b;
}
