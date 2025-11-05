import InstagramHeader from "@/components/InstagramHeader";
import StoriesBar from "@/components/StoriesBar";
import Post from "@/components/Post";
import BottomNav from "@/components/BottomNav";

import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user3.jpg";
import user4 from "@/assets/user4.jpg";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import post3 from "@/assets/post3.jpg";
import post4 from "@/assets/post4.jpg";

const posts = [
  {
    id: 1,
    username: "sarah_j",
    avatar: user1,
    image: post1,
    likes: 1284,
    caption: "Paradise found 🌴 Best sunset I've ever seen!",
    timeAgo: "2 HOURS AGO",
  },
  {
    id: 2,
    username: "mike_photos",
    avatar: user2,
    image: post2,
    likes: 892,
    caption: "Sunday brunch vibes ☕ Who else loves a good croissant?",
    timeAgo: "5 HOURS AGO",
  },
  {
    id: 3,
    username: "emma_travel",
    avatar: user3,
    image: post3,
    likes: 2156,
    caption: "City lights and blue hour magic ✨",
    timeAgo: "8 HOURS AGO",
  },
  {
    id: 4,
    username: "alex_fit",
    avatar: user4,
    image: post4,
    likes: 1543,
    caption: "Morning meditation hits different at this altitude 🧘‍♀️",
    timeAgo: "12 HOURS AGO",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <InstagramHeader />
      <StoriesBar />
      <main className="max-w-md mx-auto">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
