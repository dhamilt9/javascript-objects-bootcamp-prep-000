var playlist={
  Test: 'Aeroplane'
}


function removeFromPlaylist(a, b){
  delete a.b;
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
}
