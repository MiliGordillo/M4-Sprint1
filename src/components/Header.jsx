export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-gradient-to-r from-pink-900 to-black">
      <img
        src="/lisa-rockstar.gif"
        alt="LISA Logo"
        className="h-12 w-auto mb-2 sm:mb-0"
      />

      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-white text-xl sm:text-2xl md:text-3xl items-center">
        <a href="#" className="hover:text-pink-400">Inicio</a>
        <a href="#" className="hover:text-pink-400">Video Musicales</a>
        <a href="#" className="hover:text-pink-400">Shop</a>
      </nav>
    </header>
  );
}
