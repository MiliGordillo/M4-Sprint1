export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center p-4 bg-gradient-to-r from-pink-900 to-black">
      <img
        src="/lisa-rockstar.gif"
        alt="LISA Logo"
        className="h-12 w-auto md:scale-200 scale-100 transform origin-left justify-self-start"
      />

      <nav className="space-x-6 text-white justify-self-center text-xl sm:text-2xl md:text-3xl">
        <a href="#" className="hover:text-pink-400">Inicio</a>
        <a href="#" className="hover:text-pink-400">Video Musicales</a>
        <a href="#" className="hover:text-pink-400">Shop</a>
      </nav>
    </header>
  )
}
