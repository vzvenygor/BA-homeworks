// Створити сторінку, що показує нумерований список пісень:
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

function setPlayList(arr) {
  const DOMContainer = document.getElementById("js-song-list");

  const ol = document.createElement("ol");
  DOMContainer.append(ol);

  // Display a list of songs
  arr.forEach((i, index) => {
    const li = document.createElement("li");
    li.innerText = `${i.author}: ${i.song}`;
    ol.append(li);

    // Adding background color to every item, that divide on two
    if (index % 2) {
      li.classList.add("active");
    }
  });
}

export { setPlayList, playList };
