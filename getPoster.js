async function getKodiPosterImage(options = { host: 'http://192.168.0.198:8080' }) {
  const playerid = 1;
  const kodiRequest = {
    jsonrpc: '2.0',
    id: 7,
    method: 'Player.GetItem',
    params: {
      playerid,
      properties: ['art'],
    },
  };

  try {
    const response = await fetch(`${options.host}/jsonrpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kodiRequest),
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.result && responseData.result.item) {
           const art = responseData.result.item.art ;
        if (art) {
          // Encode the "image://" path and create the full URL
          const posterPath = encodeURIComponent(art.poster || art.fanart);
          const posterURL = `${options.host}/image/${posterPath}`;

          // Now you can use 'posterURL' to display the poster image in another application
          console.log('Poster URL:', posterURL);
        } else {
          console.log('No poster image found.');
        }
      } else {
        console.log('Invalid response from Kodi.');
      }
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function with the default host (http://localhost:8080)
getKodiPosterImage();

// will only work in same url as Kodi web ui.
