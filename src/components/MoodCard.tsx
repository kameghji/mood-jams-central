import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mood } from "@/types/mood";

interface MoodCardProps {
  mood: Mood;
  onSelect: (mood: Mood) => void;
}

const MoodCard = ({ mood, onSelect }: MoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
      style={{
        background: isHovered ? mood.gradient : "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onSelect(mood);
        // Statsig: Track mood selection
        // statsig.logEvent('mood_selected', { mood: mood.id });
      }}
    >
      <CardContent className="p-8 flex flex-col items-center justify-center h-full">
        <div
          className={`text-6xl mb-4 transition-transform duration-300 ${
            isHovered ? "scale-125" : "scale-100"
          }`}
        >
          {mood.emoji}
        </div>
        <h3
          className={`text-2xl font-bold transition-colors duration-300 ${
            isHovered ? "text-white" : "text-foreground"
          }`}
        >
          {mood.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default MoodCard;
