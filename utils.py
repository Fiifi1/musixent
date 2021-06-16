import os

base_dir = os.path.dirname(__file__)
folder = "static" + os.sep + "emotify"

emotify_dir = os.path.join(base_dir, folder)

songs = os.listdir(emotify_dir)
for i, song in  enumerate(songs):
    print(i+1, song)