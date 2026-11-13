import type { Band } from "../types";

const studioAlbums = [
  {
    title: "Ultramega OK",
    year: 1988,
    coverUrl: "https://media.s-bol.com/E0gg8zvXjOOl/1200x1191.jpg",
    tracks: [
      "Flower", "All Your Lies", "665", "Beyond the Wheel", "667",
      "Mood for Trouble", "Circle of Power", "He Didn't", "Smokestack Lightning",
      "Nazi Driver", "Head Injury", "Incessant Mace", "One Minute of Silence",
    ],
  },
  {
    title: "Louder Than Love",
    year: 1989,
    coverUrl: "https://shop.rockhall.com/cdn/shop/files/81UpY_g_lbL._UF1000_1000_QL80.jpg?v=1762443012",
    tracks: [
      "Ugly Truth", "Hands All Over", "Gun", "Power Trip", "Get on the Snake",
      "Full on Kevin's Mom", "Loud Love", "I Awake", "No Wrong No Right",
      "Uncovered", "Big Dumb Sex", "Full On (Reprise)",
    ],
  },
  {
    title: "Badmotorfinger",
    year: 1991,
    coverUrl: "https://creators-images-production.fra1.cdn.digitaloceanspaces.com/releases/0310100878/img-c-7691568912.jpeg",
    tracks: [
      "Rusty Cage", "Outshined", "Slaves & Bulldozers", "Jesus Christ Pose",
      "Face Pollution", "Somewhere", "Searching with My Good Eye Closed",
      "Room a Thousand Years Wide", "Mind Riot", "Drawing Flies", "Holy Water",
      "New Damage",
    ],
  },
  {
    title: "Superunknown",
    year: 1994,
    coverUrl: "https://uploads.tenhomaisdiscosqueamigos.com/2019/04/Soundgarden-Superunknown.jpg",
    tracks: [
      "Let Me Drown", "My Wave", "Fell on Black Days", "Mailman", "Superunknown",
      "Head Down", "Black Hole Sun", "Spoonman", "Limo Wreck",
      "The Day I Tried to Live", "Kickstand", "Fresh Tendrils", "4th of July",
      "Half", "Like Suicide",
    ],
  },
  {
    title: "Down on the Upside",
    year: 1996,
    coverUrl: "https://i5.walmartimages.com/seo/Soundgarden-Down-On-The-Upside-Music-Performance-Vinyl_192e5def-310b-4912-ba56-1a12f99ff928.ed1be970495b750cbc17f9ed3135a8eb.jpeg",
    tracks: [
      "Pretty Noose", "Rhinosaur", "Zero Chance", "Dusty", "Ty Cobb",
      "Blow Up the Outside World", "Burden in My Hand", "Never Named", "Applebite",
      "Never the Machine Forever", "Tighter & Tighter", "No Attention",
      "Switch Opens", "Overfloater", "An Unkind", "Boot Camp",
    ],
  },
  {
    title: "King Animal",
    year: 2012,
    coverUrl: "https://filmnadvd.b-cdn.net/PICTURES/soundgarden-king-animal-2vinyl-lp-602537198184.jpg",
    tracks: [
      "Been Away Too Long", "Non-State Actor", "By Crooked Steps",
      "A Thousand Days Before", "Blood on the Valley Floor", "Bones of Birds",
      "Taree", "Attrition", "Black Saturday", "Halfway There", "Worse Dreams",
      "Eyelid's Mouth", "Rowing",
    ],
  },
];

export const soundgarden: Band = {
  slug: "soundgarden",
  name: "Soundgarden",
  description: "American rock band formed in Seattle.",
  artistPhoto: "https://c02.purpledshub.com/uploads/sites/16/2023/04/soundgarden_universal_music_2012.jpg",
  albumCovers: Object.fromEntries(studioAlbums.map(({ title, coverUrl }) => [title, coverUrl])),
  songs: studioAlbums.flatMap(({ title: album, year, tracks }) =>
    tracks.map((title) => ({
      slug: title.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-$/, ""),
      title,
      album,
      year,
      lines: [],
    })),
  ),
};
