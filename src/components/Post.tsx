import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface PostProps {
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  timeAgo: string;
}

const Post = ({ username, avatar, image, likes, caption, timeAgo }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <article className="bg-background border-b border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5" />
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-muted">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="transition-transform active:scale-125">
              <Heart
                className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
              />
            </button>
            <MessageCircle className="w-6 h-6" />
            <Send className="w-6 h-6" />
          </div>
          <Bookmark className="w-6 h-6" />
        </div>

        {/* Likes */}
        <div className="font-semibold text-sm mb-2">
          {likesCount.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{username}</span>
          <span>{caption}</span>
        </div>

        {/* Time */}
        <div className="text-xs text-muted-foreground mt-2">{timeAgo}</div>
      </div>
    </article>
  );
};

export default Post;
