import { useEffect, useState } from "react";
import InstagramHeader from "@/components/InstagramHeader";
import StoriesBar from "@/components/StoriesBar";
import Post from "@/components/Post";
import BottomNav from "@/components/BottomNav";

interface PostData {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  timeAgo: string;
}

const getImagePath = (path: string) => {
  if (path.startsWith('src/assets/')) {
    return new URL(`../${path}`, import.meta.url).href;
  }
  return path;
};

const Index = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(res => res.json())
      .then(data => {
        const postsWithImages = data.posts.map((post: PostData) => ({
          ...post,
          avatar: getImagePath(post.avatar),
          image: getImagePath(post.image)
        }));
        setPosts(postsWithImages);
      })
      .catch(err => console.error('Failed to load posts:', err));
  }, []);

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
