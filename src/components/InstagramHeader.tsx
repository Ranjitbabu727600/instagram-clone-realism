import { Heart, MessageCircle, Send } from "lucide-react";

const InstagramHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[hsl(var(--ig-purple))] via-[hsl(var(--ig-pink))] to-[hsl(var(--ig-orange))] bg-clip-text text-transparent">
          Instagram
        </h1>
        <div className="flex items-center gap-4">
          <Heart className="w-6 h-6" />
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default InstagramHeader;
