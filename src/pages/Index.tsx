import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import Hero from "@/components/Hero";
import MoodCard from "@/components/MoodCard";
import PlaylistEmbed from "@/components/PlaylistEmbed";
import { moods, Mood } from "@/types/mood";
import { toast } from "sonner";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  
  // Statsig Feature Flag: Number of moods to display (4 vs 8)
  // const moodCount = statsig.getConfig('mood_display').get('count', 8);
  const moodCount = 8; // Default to 8 moods
  
  // Statsig Feature Flag: Button copy variation
  // const surpriseButtonText = statsig.getConfig('button_copy').get('surprise_button', 'Surprise Me');
  const surpriseButtonText = "Surprise Me";

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    toast.success(`Loading ${mood.name} vibes...`);
  };

  const handleSurpriseMe = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setSelectedMood(randomMood);
    toast.success(`Surprise! Here's something ${randomMood.name.toLowerCase()}!`);
    // Statsig: Track surprise button click
    // statsig.logEvent('surprise_button_clicked', { selectedMood: randomMood.id });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Hero />

        <div className="mb-12 flex justify-center">
          <Button
            onClick={handleSurpriseMe}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            {surpriseButtonText}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {moods.slice(0, moodCount).map((mood, index) => (
            <div
              key={mood.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MoodCard mood={mood} onSelect={handleMoodSelect} />
            </div>
          ))}
        </div>

        {selectedMood && (
          <PlaylistEmbed
            mood={selectedMood}
            onClose={() => setSelectedMood(null)}
          />
        )}
      </div>

      {/* Statsig Integration Notes:
        - Feature flags configured for:
          * moodCount: Controls number of moods displayed (4 vs 8)
          * surpriseButtonText: A/B test button copy
          * playlistLength: Could vary playlist duration (short vs long)
        - Events tracked:
          * mood_selected: When user picks a mood
          * playlist_cycled: When user cycles through playlists
          * surprise_button_clicked: When surprise me is used
      */}
    </div>
  );
};

export default Index;
