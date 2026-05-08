// These are the 8 albums that load when the site is first opened
const defaultAlbums = [
  { id: 1, title: "D>E>A>T>H>M>E>T>A>L", artist: "Panchiko", genre: "Shoegaze / Indie Rock", year: 2000, rating: 9.4, img: "images/deathmetal.jpg" },
  { id: 2, title: "Graduation", artist: "Kanye West", genre: "Hip Hop", year: 2007, rating: 9.2, img: "images/graduation.jpg" },
  { id: 3, title: "Loveless", artist: "My Bloody Valentine", genre: "Shoegaze", year: 1991, rating: 9.8, img: "images/loveless.jpg" },
  { id: 4, title: "Master of Puppets", artist: "Metallica", genre: "Heavy Metal", year: 1986, rating: 9.7, img: "images/metallica.jpg" },
  { id: 5, title: "Wish You Were Here", artist: "Pink Floyd", genre: "Progressive Rock", year: 1975, rating: 9.6, img: "images/pinkfloyd.jpg" },
  { id: 6, title: "Siamese Dream", artist: "Smashing Pumpkins", genre: "Alternative Rock", year: 1993, rating: 9.3, img: "images/pumpkins.jpg" },
  { id: 7, title: "The Queen Is Dead", artist: "The Smiths", genre: "Indie Rock", year: 1986, rating: 9.5, img: "images/smiths.jpg" },
  { id: 8, title: "Ten", artist: "Pearl Jam", genre: "Grunge", year: 1991, rating: 9.1, img: "images/ten.jpg" }
];

// Check if the user has any saved albums in the browser
// If they do, load those — if not, use the defaults above
let albumData = JSON.parse(localStorage.getItem("albumData")) || defaultAlbums;

// Whenever the album list changes, this saves it to the browser
// so the data is still there when the page is refreshed
const saveData = () => {
  localStorage.setItem("albumData", JSON.stringify(albumData));
};

// This lets us use {{formatRating}} inside Handlebars templates
Handlebars.registerHelper("formatRating", (rating) => rating + " / 10");

// This function handles all the Handlebars rendering
// You give it the template id, the data you want to display,
// and the id of the element you want to put the result into
const renderTemplate = (templateId, data, targetId) => {
  const source = document.getElementById(templateId).innerHTML;
  const template = Handlebars.compile(source);
  document.getElementById(targetId).innerHTML = template(data);
};