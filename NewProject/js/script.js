// The 8 default albums
const albums = [
  { id: 1, title: "D>E>A>T>H>M>E>T>A>L", artist: "Panchiko", genre: "Shoegaze / Indie Rock", year: 2000, rating: 9.4, img: "images/deathmetal.jpg" },
  { id: 2, title: "Graduation", artist: "Kanye West", genre: "Hip Hop", year: 2007, rating: 9.2, img: "images/graduation.jpg" },
  { id: 3, title: "Loveless", artist: "My Bloody Valentine", genre: "Shoegaze", year: 1991, rating: 9.8, img: "images/loveless.jpg" },
  { id: 4, title: "Master of Puppets", artist: "Metallica", genre: "Heavy Metal", year: 1986, rating: 9.7, img: "images/metallica.jpg" },
  { id: 5, title: "Wish You Were Here", artist: "Pink Floyd", genre: "Progressive Rock", year: 1975, rating: 9.6, img: "images/pinkfloyd.jpg" },
  { id: 6, title: "Siamese Dream", artist: "Smashing Pumpkins", genre: "Alternative Rock", year: 1993, rating: 9.3, img: "images/pumpkins.jpg" },
  { id: 7, title: "The Queen Is Dead", artist: "The Smiths", genre: "Indie Rock", year: 1986, rating: 9.5, img: "images/smiths.jpg" },
  { id: 8, title: "Ten", artist: "Pearl Jam", genre: "Grunge", year: 1991, rating: 9.1, img: "images/ten.jpg" }
];

// Load saved data from localStorage, fall back to defaults if nothing saved
let albumData = JSON.parse(localStorage.getItem("albumsData")) || albums;

// Save the current album array to localStorage
const saveData = () => {
  localStorage.setItem("albumsData", JSON.stringify(albumData));
};

