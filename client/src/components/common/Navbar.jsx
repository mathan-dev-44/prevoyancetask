const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div
        className="
          mx-auto
          max-w-7xl
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>

        <span className="text-gray-500">React + Node + Neon</span>
      </div>
    </header>
  );
};

export default Navbar;
