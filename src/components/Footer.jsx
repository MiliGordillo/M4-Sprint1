export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center p-4 mt-10 space-y-2 pb-10 md:pb-4">
      <div className="space-x-4 text-pink-400 text-lg">
        <a href="https://www.instagram.com/lalalalisa_m?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram hover:text-white transition" />
        </a>
        <a href="https://x.com/wearelloud" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x hover:text-white transition" />
        </a>
        <a href="https://www.youtube.com/@wearelloud" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube hover:text-white transition" />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        &copy; 2025 LISA. Todos los derechos reservados.
      </p>
    </footer>
  );
}

