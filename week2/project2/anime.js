var anime=[
    "Black Clover",
    "Full Metal Alchemist",
    "One Piece",
    "Fairy tail",
    "My Hero Academia",
    "Inuyasha",
    "Samurai Champloo",
    "Cowboy Be-bop",
    "Naruto",
    "Dragon Ball",
    "Hunter x Hunter",
    "Bleach"
]

var animelist = document.getElementById("mylist")

for (var i = 0; i < anime.length; i++) {
    animelist.innerHTML += "<li>" + anime[i] + "</li>"
}