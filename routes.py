import re
from flask import render_template, request, Response
from app import app, db
from models import User, Sentiment_rating
import json

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/home", methods=["GET"])
def home():
    return render_template("home.html")

@app.route("/player", methods=["GET"])
def player():
    return render_template("player.html")

@app.route("/submit_rating", methods=["POST"])
def submit_rating():
    if request.method == "POST":
        form = request.form
        user_email = ""
        track_id = ""
        track_source = ""  
        track_title = ""
        artist_name = ""
        track_duration = ""
        happy_rating = form.get("happy-rating-value")
        sadness_rating = form.get("sad-rating-value")
        annoying_rating = form.get("annoying-rating-value")
        anxious_rating = form.get("anxious-rating-value")
        energizing_rating = form.get("energizing-rating-value")
        neutral_rating = form.get("neutral-rating-value")
        dreamy_rating = form.get("dreamy-rating-value")
        relaxing_rating = form.get("relaxing-rating-value")
        try:
            #instantiate sentiment rating
            rating = Sentiment_rating(track_id=track_id, 
            track_source=track_source, track_title=track_title, artist_name=artist_name, 
            track_duration=track_duration, happy_rating=happy_rating, 
            sadness_rating=sadness_rating, annoying_rating=annoying_rating,
            anxious_rating=anxious_rating, energizing_rating=energizing_rating, 
            neutral_rating=neutral_rating, dreamy_rating=dreamy_rating, relaxing_rating=relaxing_rating)
            rating.set_date()

            #print(happy_rating, sadness_rating, anxious_rating, annoying_rating, energizing_rating, neutral_rating, dreamy_rating, relaxing_rating)
            
            #add to database
            db.session.add(rating)
            db.session.commit()
            return Response(json.dumps({'status':'OK', 'message': 'Submit OK!'}), status=200, mimetype='application/json')
        except Exception as e:
            print(e)
            # print(form)
            return Response(json.dumps({'status':'FAIL', 'message': 'Fatal Error!'}), status=400, mimetype='application/json')














# ##playlist_items(playlist_id, fields=None, limit=100, offset=0, market=None, additional_types=('track', 'episode'))

# import spotipy
# from config import Config
# from spotipy.oauth2 import SpotifyClientCredentials

# cID = '0b225e65a579477f89d1ba5308447b52'
# cSK = 'c052823916f44c4498fd6a022d655cab'

# auth_manager = SpotifyClientCredentials(cID, cSK)
# sp = spotipy.Spotify(auth_manager=auth_manager)

# artist_name = []
# track_title = []
# duration_ms = []
# track_id = []
# for i in range(0,100):
#     track_results = sp.search(q='year:2018', type='track', limit=5, offset=0)
#     for i, t in enumerate(track_results['tracks']['items']):
#         artist_name.append(t['artists'][0]['name'])
#         track_title.append(t['name'])
#         track_id.append(t['id'])
#         duration_ms.append(t['duration_ms'])
# blob = {
#     "track_id":track_id,
#     "track_title":track_title,
#     "duration_ms":duration_ms,
#     "artist_name":artist_name
# }

