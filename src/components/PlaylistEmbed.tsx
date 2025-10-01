import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, RefreshCw } from "lucide-react";
import { Mood } from "@/types/mood";

interface PlaylistEmbedProps {
  mood: Mood;
  onClose: () => void;
}

const PlaylistEmbed = ({ mood, onClose }: PlaylistEmbedProps) => {
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);

  const cyclePlaylist = () => {
    setCurrentPlaylistIndex((prev) => (prev + 1) % mood.playlists.length);
    // Statsig: Track playlist cycle
    // statsig.logEvent('playlist_cycled', { mood: mood.id, playlistIndex: currentPlaylistIndex });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl animate-scale-in relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 hover:bg-secondary"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="mb-6">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-4"
            style={{ background: mood.gradient }}
          >
            <span className="text-4xl">{mood.emoji}</span>
            <h2 className="text-2xl font-bold text-white">{mood.name}</h2>
          </div>
          <p className="text-muted-foreground">
            Playlist {currentPlaylistIndex + 1} of {mood.playlists.length}
          </p>
        </div>

        <div className="relative w-full" style={{ paddingTop: "100%" }}>
          <iframe
            src={mood.playlists[currentPlaylistIndex]}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        {mood.playlists.length > 1 && (
          <Button
            onClick={cyclePlaylist}
            className="mt-6 w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold"
            size="lg"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Another Playlist
          </Button>
        )}
      </div>
    </div>
  );
};

export default PlaylistEmbed;
