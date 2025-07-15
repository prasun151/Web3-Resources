const Navigation = () => {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center">
      <div className="flex space-x-8">
        <a href="#" className="text-foreground hover:text-accent transition-colors">Home</a>
        <a href="#" className="text-foreground hover:text-accent transition-colors">Posts</a>
      </div>
      <div>
        <button className="text-foreground hover:text-accent transition-colors">
          toggle theme
        </button>
      </div>
    </nav>
  );
};

export default Navigation;