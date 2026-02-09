import { useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import tryImg from '../assets/tryImg.jpg';
import tryImg1 from '../assets/tryImg1.jpeg';



export default function ValentinePage() {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [saidYes, setSaidYes] = useState(false)
  const [showMore, setShowMore] = useState(false) // New state to toggle extra card
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false) // Track if No button moved
  const noButtonRef = useRef(null)
  
  const moveNoButton = useCallback((e) => {
    if (!containerRef.current) return
    
    e.preventDefault()
    e.stopPropagation()
    
    const buttonWidth = 160
    const buttonHeight = 56
    const padding = 10
    
    const containerRect = containerRef.current.getBoundingClientRect()
    
    const mouseX = e.clientX - containerRect.left
    const mouseY = e.clientY - containerRect.top
    
    const minX = buttonWidth / 2 + padding
    const maxX = containerRect.width - buttonWidth / 2 - padding
    const minY = buttonHeight / 2 + padding
    const maxY = containerRect.height - buttonHeight / 2 - padding
    
    if (maxX <= minX || maxY <= minY) {
      setNoButtonPos({ 
        x: containerRect.width / 2, 
        y: containerRect.height / 2 
      })
      setHasMoved(true)
      return
    }
    
    let bestX = minX
    let bestY = minY
    let maxDistance = 0
    
    for (let i = 0; i < 30; i++) {
      const testX = Math.random() * (maxX - minX) + minX
      const testY = Math.random() * (maxY - minY) + minY
      const distance = Math.sqrt(
        Math.pow(testX - mouseX, 2) + Math.pow(testY - mouseY, 2)
      )
      
      if (distance > maxDistance) {
        maxDistance = distance
        bestX = testX
        bestY = testY
      }
    }
    
    const safeX = Math.max(minX, Math.min(maxX, bestX))
    const safeY = Math.max(minY, Math.min(maxY, bestY))
    
    setNoButtonPos({ x: safeX, y: safeY })
    setHasMoved(true)
  }, [])
  
  if (saidYes) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex flex-col items-center justify-center p-6 overflow-hidden">
        
        {/* Background love layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1608889175123-8ee1623c8c4b?w=600&q=80"
            alt="teddy love"
            className="absolute bottom-0 left-0 w-72 h-72 opacity-20 rounded-full object-cover blur-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1615486363973-f79d875780cf?w=600&q=80"
            alt="teddy love"
            className="absolute top-0 right-0 w-72 h-72 opacity-20 rounded-full object-cover blur-sm"
          />
  
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute text-3xl animate-bounce opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              💖
            </span>
          ))}
        </div>
  
        {/* Main card */}
        <div className="relative z-10 text-center animate-in fade-in duration-700 bg-white/75 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-[0_10px_40px_rgba(244,63,94,0.25)] border border-rose-200/60 max-w-md mx-auto">
          
          <p className="text-6xl mb-4 animate-pulse">🥹💍</p>
  
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">
            You said YES… 💕
          </h1>
  
          <p className="text-xl md:text-2xl text-rose-800/90 mb-10 max-w-md leading-relaxed">
            I just dont know k kya bolna h, pr ma hu sirf tumhara.  
            Tum jitna bhi ignore kar lo, bhaga lo, suna lo — ma hu. 🌹  
            <br /><br />
            Ma pinjray se parinda nikaal laya…  
            par parinday ke dil se pinjra kaise nikaalu?
          </p>
  
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowMore(true)}
              className="px-10 py-4 bg-white/80 text-rose-600 font-semibold rounded-full border border-rose-300 shadow-md hover:bg-rose-50 hover:shadow-lg transition-all transform hover:scale-105"
            >
              There’s Something More… 💌
            </button>
          </div>
        </div>

        {/* Show more card */}
        {showMore && (
          <div className="relative z-20 mt-10 animate-in fade-in slide-in-from-bottom duration-700 bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_12px_45px_rgba(244,63,94,0.25)] border border-rose-200/60 max-w-lg text-center mx-auto">
            
            {/* Image */}
            <div className="relative mb-6">
              <img
                src={tryImg1}
                alt="Our moment"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
  
            {/* Text */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
              This… is my favorite picture ❤️
            </h2>
  
            <p className="text-lg text-rose-800/90 leading-relaxed">
              Do haath… ek ehsaas.  
              Is tasveer mein sirf hum nahi hain —  
              ismein woh har wada hai jo bina bole kiya gaya. 🌹  
              <br /><br />
              At the end just wanna make u understand saira <br />
              I get sad when u dont like me the way I do.
              
            </p>
  
            <p className="mt-6 text-rose-600 font-semibold">
              Always you. Always us. ♾️
            </p>
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['❤️', '💕', '💗', '💖', '✨', '🌹', '💕', '❤️'].map((heart, i) => (
          <span
            key={i}
            className="absolute text-2xl md:text-4xl opacity-25 animate-float"
            style={{
              left: `${8 + (i * 12) % 85}%`,
              top: `${10 + (i * 15) % 80}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {heart}
          </span>
        ))}
      </div>

      <div ref={containerRef} className="relative z-10 text-center max-w-2xl bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(244,63,94,0.15)] border border-rose-200/50 overflow-hidden">
        <img
          src={tryImg}
          alt=""
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-6 ring-4 ring-rose-200/80 shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Will you be my Pasandida Aurat?
        </h1>
        <p className="text-lg md:text-xl text-rose-800/80 mb-12">
          Suno Pagli Soch k nhi ki,or gr soch k ki hoti to chaht na hoti. 🌸
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center min-h-[60px] relative">
          <button
            onClick={() => setSaidYes(true)}
            className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-10"
          >
            Yes! 💕
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onMouseMove={moveNoButton}
            onMouseOver={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              moveNoButton(e)
            }}
            className={`px-10 py-4 bg-slate-200 hover:bg-slate-300 text-slate-600 font-medium rounded-full shadow-lg ${
              hasMoved ? 'absolute' : 'relative'
            }`}
            style={
              hasMoved && noButtonPos.x > 0 && noButtonPos.y > 0
                ? {
                    left: `${noButtonPos.x}px`,
                    top: `${noButtonPos.y}px`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 50,
                    transition: 'none',
                  }
                : {}
            }
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
