var anime= [
    "Inuyasha",
    "Naruto",
    "Black Clover",
    "Dragonball",
    "My Hero Academia",
    "Radient",
    "Cowboy Bebop",
    "Samurai Champloo",
    "Full Metal Alchemist",
    "Hunter x Hunter",
    "One Piece",
    "Durarara!!",
    "Dr. Stone"
]
var animelist= document.getElementById("mylist")

for (i = 0 ; i < anime.length; i++){
    animelist.innerHTML += "<li>" + anime[i] + "</li>"
}




