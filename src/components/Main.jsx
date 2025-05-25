import { motion } from "framer-motion";
import AlbumList from "./AlbumList";


export default function Main() {
  return (
    <motion.section
      className="relative grid grid-cols-1 md:grid-cols-2 items-start px-8 py-8 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >

      <div className="absolute inset-0 z-0">
        <img
          src="/alterego.jpg"
          alt="Fondo alter ego"
          className="w-full h-full object-cover brightness-[0.8] contrast-125"
        />
      </div>

      <div className="relative z-10">
        <AlbumList />
      </div>


      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="relative z-10 flex justify-center"
      >
        <img
          src="/lisa.png"
          alt="Lisa Ego"
          className="w-full max-w-md object-contain"
        />
      </motion.div>
    </motion.section>
  );
}
