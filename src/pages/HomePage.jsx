import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {['💖', '💕', '🌹', '✨', '❤️'].map((heart, i) => (
          <span
            key={i}
            className="absolute text-4xl animate-float opacity-20"
            style={{
              left: `${10 + (i * 20) % 90}%`,
              top: `${15 + (i * 18) % 80}%`,
              animationDelay: `${i * 0.5}s`,
              userSelect: 'none',
            }}
          >
            {heart}
          </span>
        ))}
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-widest drop-shadow-lg" style={{ fontFamily: "'Dancing Script', cursive" }}>
        For my pasandida aurat
      </h1>
      <p className="text-pink-300 text-lg md:text-xl mb-12 max-w-md text-center">
        A little surprise crafted with love, just for you.
      </p>

      <Link
        to="/valentine"
        className="px-12 py-5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-110"
        aria-label="Open your surprise"
      >
        Open your surprise 💌
      </Link>
    </div>
  )
}
