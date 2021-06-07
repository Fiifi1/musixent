##playlist_items(playlist_id, fields=None, limit=100, offset=0, market=None, additional_types=('track', 'episode'))

import spotipy
from config import Config
from spotipy.oauth2 import SpotifyClientCredentials

cID = '0b225e65a579477f89d1ba5308447b52'
cSK = 'c052823916f44c4498fd6a022d655cab'

auth_manager = SpotifyClientCredentials(cID, cSK)
sp = spotipy.Spotify(auth_manager=auth_manager)

artist_name = []
track_title = []
duration_ms = []
track_id = []
for i in range(0,100):
    track_results = sp.search(q='year:2018', type='track', limit=5, offset=0)
    for i, t in enumerate(track_results['tracks']['items']):
        artist_name.append(t['artists'][0]['name'])
        track_title.append(t['name'])
        track_id.append(t['id'])
        duration_ms.append(t['duration_ms'])
blob = {
    "track_id":track_id,
    "track_title":track_title,
    "duration_ms":duration_ms,
    "artist_name":artist_name
}
