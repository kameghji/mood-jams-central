export interface Mood {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  playlists: string[]; // Spotify playlist URLs
}

export const moods: Mood[] = [
  {
    id: "happy",
    name: "Happy",
    emoji: "😊",
    gradient: "var(--gradient-happy)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXca8AyWK6Y7g",
    ],
  },
  {
    id: "chill",
    name: "Chill",
    emoji: "😌",
    gradient: "var(--gradient-chill)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZd79rJ6a7lp",
    ],
  },
  {
    id: "focused",
    name: "Focused",
    emoji: "🎯",
    gradient: "var(--gradient-focused)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3PFzdbtx1Us",
    ],
  },
  {
    id: "sad",
    name: "Sad",
    emoji: "😢",
    gradient: "var(--gradient-sad)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWSqBruwoIXkA",
    ],
  },
  {
    id: "energetic",
    name: "Energetic",
    emoji: "⚡",
    gradient: "var(--gradient-energetic)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3ZeFHRhhi7Y",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4eRPd9frC1m",
    ],
  },
  {
    id: "romantic",
    name: "Romantic",
    emoji: "💕",
    gradient: "var(--gradient-romantic)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX50KJi1iJsRP",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX6VdMW310YC7",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWYmmr74INQlb",
    ],
  },
  {
    id: "anxious",
    name: "Anxious",
    emoji: "😰",
    gradient: "var(--gradient-anxious)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX1s9knjP51Oa",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u",
    ],
  },
  {
    id: "party",
    name: "Party",
    emoji: "🎉",
    gradient: "var(--gradient-party)",
    playlists: [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7XP",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4JAvHpjipBk",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXaXB8fQg7xif",
    ],
  },
];
