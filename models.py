from enum import unique
from app import db
from datetime import datetime
from sqlalchemy.orm import backref
import re

class User(db.Model):
    # personal info page
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    track_id = db.Column(db.String(50), nullable=False, index=True)
    track_title = db.Column(db.String(100), unique=False, nullable=False, index=True)
    artist_name = db.Column(db.String(50), unique=False, nullable=False, index=True) 
    track_duration = db.Column(db.Float, unique=False, nullable=True, index=True)
    amusement_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    sadness_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    beauty_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    joy_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    anxiety_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    triumph_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    scariness_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    defiance_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    defiance_rating = db.Column(db.Float, unique=False, nullable=False, index=True)
    rating_date = db.Column(db.Datetime(), unique=False, nullable=False)

    def set_rating_date(self, rating_date):
        self.rating_date = datetime.datetime.now()

    def __repr__(self):
        return f'Track-details: {self.track_title} - {self.artist_name} '