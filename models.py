from enum import unique
from app import db, index
from datetime import datetime
from sqlalchemy.orm import backref
import re

class User(db.Model):
    id = db.Column(db.Integer, autoincrement=True)
    email = db.Column(db.String(128), primary_key=True, unique=True)

class Sentiment_rating(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.String(128), db.ForeignKey('user.email'), nullable=False, index=True)
    track_id = db.Column(db.String(50), nullable=False, unique=False, index=True)
    track_source = db.Column(db.String(30), unique=False, nullable=False, index=True)
    track_title = db.Column(db.String(100), unique=False, nullable=False, index=True)
    artist_name = db.Column(db.String(50), unique=False, nullable=False, index=True) 
    track_duration = db.Column(db.Float, unique=False, nullable=True, index=True)
    happy_rating = db.Column(db.Float, unique=False, nullable=True, index=True)         #Happy 😁
    sadness_rating = db.Column(db.Float, unique=False, nullable=True, index=True)       #Sad 😥
    annoying_rating = db.Column(db.Float, unique=False, nullable=True, index=True)      #Annoying 😒
    anxious_rating = db.Column(db.Float, unique=False, nullable=True, index=True)       #Anxious 😩😰
    energizing_rating = db.Column(db.Float, unique=False, nullable=True, index=True)    #Energizing ⚡
    neutral_rating = db.Column(db.Float, unique=False, nullable=True, index=True)       #Neutral 😐
    dreamy_rating = db.Column(db.Float, unique=False, nullable=True, index=True)        #Dreamy 😇
    relaxing_rating = db.Column(db.Float, unique=False, nullable=True, index=True)      #Relaxing 😎
    rating_date = db.Column(db.Datetime(), unique=False, nullable=True, index=True)

    def __init__(self):
        self.rating_date = datetime.datetime.utcnow()

    def __repr__(self):
        return f'Track-details: {self.track_title} - {self.artist_name}'