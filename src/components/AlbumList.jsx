import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const songs = [
  { id: 1, title: "Born Again", duration: "0:15" },
  { id: 2, title: "ROCKSTAR", duration: "0:15" },
  { id: 3, title: "Elastigirl", duration: "0:15" },
  { id: 4, title: "New Woman ft. Rosalía", duration: "0:15" },
  { id: 5, title: "FXCK UP THE WORLD ft. Future", duration: "0:15" },
  { id: 6, title: "Rapunzel ft. Megan Thee Stallion", duration: "0:15" },
  { id: 7, title: "Moonlit Floor", duration: "0:15" },
  { id: 8, title: "When I'm with you ft. Tyla", duration: "0:15" },
  { id: 9, title: "BADGRRRL", duration: "0:15" },
  { id: 10, title: "Lifestyle", duration: "0:15" },
  { id: 11, title: "Chill", duration: "0:15" },
  { id: 12, title: "Dream", duration: "0:15" },
];

export default function AlbumList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <motion.section
      id="tracklist"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="pt-2 pb-6 px-6"
    >
      <h3 className="text-3xl font-bold mb-6 text-center">
        Escuchá un adelanto del nuevo album de LISA: ALTER EGO
      </h3>

      {currentSong && (
        <div className="text-center mb-6">
          <p className="text-pink-300 font-semibold">
            🎧 Reproduciendo: {currentSong}
          </p>
        </div>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {songs.map((song) => (
          <motion.li
            key={song.id}
            className="bg-gray-800 p-4 rounded-lg hover:bg-pink-800 transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span>{song.title}</span>
              <span>{song.duration}</span>
            </div>
            <button
              onClick={() => setCurrentSong(song.title)}
              className="w-full bg-pink-600 hover:bg-pink-500 text-white px-4 py-1 rounded-full text-sm transition"
            >
              Escuchar ahora
            </button>
          </motion.li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Escuchalo completo acá</h2>

        <div className="flex justify-center space-x-6">
          <a
            href="https://open.spotify.com/intl-es/album/5eoWRkeplmcCL97afSMJVm?si=XPu50WLwTcmfR4ssCxr1ig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full transition"
          >
            <i className="bi bi-spotify text-xl"></i>
            <span>Spotify</span>
          </a>
          <a
            href="https://music.apple.com/ca/album/alter-ego/1798585113"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition"
          >
            <i className="bi bi-apple text-xl"></i>
            <span>Apple Music</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

