import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user3.jpg";
import user4 from "@/assets/user4.jpg";

interface Story {
  id: number;
  username: string;
  avatar: string;
}

const stories: Story[] = [
  { id: 1, username: "sarah_j", avatar: user1 },
  { id: 2, username: "mike_photos", avatar: user2 },
  { id: 3, username: "emma_travel", avatar: user3 },
  { id: 4, username: "alex_fit", avatar: user4 },
];

const StoriesBar = () => {
  return (
    <div className="bg-background border-b border-border py-4 px-2">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide max-w-md mx-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 min-w-fit">
            <div className="relative">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[hsl(var(--ig-purple))] via-[hsl(var(--ig-pink))] to-[hsl(var(--ig-orange))]">
                <div className="w-full h-full rounded-full p-[2px] bg-background">
                  <img
                    src={story.avatar}
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
