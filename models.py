from enum import unique
from app import db
from datetime import datetime
from sqlalchemy.orm import backref

class User(db.Model):
    id = db.Column('user_id', db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(128), unique=True)

    def __repr__(self):
        return f'id: {self.id}'

class Sentiment_rating(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    #user_email = db.Column(db.String(128), db.ForeignKey('user.email'), nullable=True, index=True)#change nullable value
    track_id = db.Column(db.String(50), nullable=False, index=True)
    track_source = db.Column(db.String(30), nullable=True, index=True)      #change nullable values
    track_title = db.Column(db.String(100), nullable=True, index=True)      #change nullable values
    artist_name = db.Column(db.String(50), nullable=True, index=True)       #change nullable values
    track_duration = db.Column(db.Float, nullable=True, index=True)    
    happy_rating = db.Column(db.Float, nullable=True, index=True)
    sadness_rating = db.Column(db.Float, nullable=True, index=True)       
    annoying_rating = db.Column(db.Float, nullable=True, index=True)
    anxious_rating = db.Column(db.Float, nullable=True, index=True)
    energizing_rating = db.Column(db.Float, nullable=True, index=True)    
    neutral_rating = db.Column(db.Float, nullable=True, index=True)
    dreamy_rating = db.Column(db.Float, nullable=True, index=True)
    relaxing_rating = db.Column(db.Float, nullable=True, index=True)
    rating_date = db.Column(db.DateTime(), nullable=True, index=True)
    
    def set_date(self):
        self.rating_date = datetime.utcnow()

    def __repr__(self):
        return f'Track-details: {self.track_title} - {self.artist_name}'