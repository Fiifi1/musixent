import os
import eyed3

base_dir = os.path.dirname(__file__)
folder = "static" + os.sep + "emotify"


#Unfold song to get details in order to send to db
def get_song_details(genre, name):
    track_path = os.path.join(folder, genre)
    track_path = os.path.join(track_path, name)
    track = eyed3.load(track_path)
    artist = track.tag.artist
    title = track.tag.title
    return title, artist
    

def getAllSongs():
    emotify_dir = os.path.join(base_dir, folder)

    classical_dir = emotify_dir + os.sep + "classical"
    electronic_dir = emotify_dir + os.sep + "electronic"
    pop_dir = emotify_dir + os.sep + "pop"
    rock_dir = emotify_dir + os.sep + "rock" 

    classical_songs = os.listdir(classical_dir)
    electronic_songs = os.listdir(electronic_dir)
    pop_songs = os.listdir(pop_dir)
    rock_songs = os.listdir(rock_dir)

    classical_song_list=[]
    electronic_song_list=[]
    pop_song_list = []
    rock_song_list = []

    for c_song in classical_songs:
        song = classical_dir + os.sep + c_song
        track = eyed3.load(song)
        classical_song_list.append({
            "name": c_song,
            "title":track.tag.title,
            "artist":track.tag.artist
        })
        
    for e_song in electronic_songs:
        song = electronic_dir + os.sep + e_song
        track = eyed3.load(song)
        electronic_song_list.append({
            "name": e_song,
            "title":track.tag.title,
            "artist":track.tag.artist
        })

    for p_song in pop_songs:
        song = classical_dir + os.sep + p_song
        track = eyed3.load(song)
        pop_song_list.append({
            "name": p_song,
            "title":track.tag.title,
            "artist":track.tag.artist
        })

    for r_song in rock_songs:
        song = classical_dir + os.sep + r_song
        track = eyed3.load(song)
        classical_song_list.append({
            "name": r_song,
            "title": track.tag.title,
            "artist": track.tag.artist
        })    

    #all_song_list = classical_song_list + pop_song_list +electronic_song_list + rock_song_list
    return classical_song_list, electronic_song_list, pop_song_list, rock_song_list