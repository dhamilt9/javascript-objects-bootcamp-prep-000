var playlist={
  RHCP: "Aeroplane"
}

function updatePlaylist(pl, artist, song){
  return Object.assign({}, pl, { [artist]: song })
}
