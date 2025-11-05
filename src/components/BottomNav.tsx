import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
      <div className="flex items-center justify-around max-w-md mx-auto py-2">
        <button className="p-2">
          <Home className="w-7 h-7" />
        </button>
        <button className="p-2">
          <Search className="w-7 h-7" />
        </button>
        <button className="p-2">
          <PlusSquare className="w-7 h-7" />
        </button>
        <button className="p-2">
          <Heart className="w-7 h-7" />
        </button>
        <button className="p-2">
          <User className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
