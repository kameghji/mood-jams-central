import { Music } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="bg-primary p-4 rounded-full shadow-lg">
          <Music className="w-12 h-12 text-primary-foreground" />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
        Mood Tunes
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        Your personal jukebox for emotions. Pick your mood, discover your soundtrack.
      </p>
    </div>
  );
};

export default Hero;
