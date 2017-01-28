console.clear();
const idContainer = document.querySelector('#test-div');
const q = "Interpol";

//const qEndPoint = "https://api.spotify.com/v1/search?q= " & encodeURI(q) & "&type=artist";
//this is the same as above, but a different way to interpolate string with the bacticks ``

let artistsID;


//getArtistsID = (q) => {
const qEndPoint = `https://api.spotify.com/v1/search?q=${encodeURI(q)}&type=artist`;
console.log(`https://api.spotify.com/v1/search?q=${encodeURI(q)}&type=artist`);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', qEndPoint, true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, true);

  function processRequest() {
    if (xhr.readyState === 4) {
      let response = JSON.parse(xhr.response);

     let artistsID = response.artists.items[0].id;
      console.log(artistsID);
      //idContainer.innerHTML = artistsID;

    }

    return artistsID;
  }
//console.log(artistsID);
//}


/* // Second part take the comment section and run it. You should get "Evil" as the top song for Interpol.

let artistTopTrack;
//getTopTracks = (id) => {
//const qEndPoint2 = `https://api.spotify.com/v1/artists/${artistsID}/top-tracks?country=us`;
const qEndPoint2 = "https://api.spotify.com/v1/artists/3WaJSfKnzc65VDgmj2zU8B/top-tracks?country=us";

//console.log(`https://api.spotify.com/v1/artists/${artistsID}/top-tracks?country=us`);

  const xhr2 = new XMLHttpRequest();
  xhr2.open('GET', qEndPoint2, true);
  xhr2.send();
  xhr2.addEventListener("readystatechange", processRequest, true);

  function processRequest() {
    if (xhr2.readyState === 4) {
      let response = JSON.parse(xhr2.response);

      //artistTopTrack = response;
      console.log(response.tracks[0].name);
      //idContainer.innerHTML = artistsID;

    }
  }


//} */
