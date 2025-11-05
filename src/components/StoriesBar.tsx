import { useEffect, useState } from "react";

interface Story {
  id: number;
  username: string;
  avatar: string;
}

const getImagePath = (path: string) => {
  if (path.startsWith('src/assets/')) {
    return new URL(`../${path}`, import.meta.url).href;
  }
  return path;
};

const StoriesBar = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(res => res.json())
      .then(data => setStories(data.stories))
      .catch(err => console.error('Failed to load stories:', err));
  }, []);

  return (
    <div className="bg-background border-b border-border py-4 px-2">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide max-w-md mx-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 min-w-fit">
            <div className="relative">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[hsl(var(--ig-purple))] via-[hsl(var(--ig-pink))] to-[hsl(var(--ig-orange))]">
                <div className="w-full h-full rounded-full p-[2px] bg-background">
                  <img
                    src={getImagePath(story.avatar)}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="text-xs text-foreground">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesBar;
