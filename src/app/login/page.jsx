"use client"

import { useState, useRef } from "react"
import { Volume2, VolumeX, X, ChevronLeft } from "lucide-react"
import { WalletList } from "@/components/wallet-list"

export default function LoginPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showAllWallets, setShowAllWallets] = useState(false)
  const [email, setEmail] = useState("")
  const audioRef = useRef(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Library Image with Blur */}
      <div className="absolute inset-0">
        <img
          src="/img/Library.jpg"
          alt="Library Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="relative w-[90%] max-w-6xl">
          {/* Desk Image */}
          <img
            src="/img/Desk.jpg"
            alt="Desk Setup"
            className="w-full rounded-lg shadow-2xl"
            style={{ borderRadius: "10px" }}
          />

          {/* Wallet Connection Interface */}
          <div className="absolute right-0 top-0 h-full w-[40%] backdrop-blur-sm bg-black/40 rounded-r-md" style={{ borderRadius: "10px" }} >
            <div className="relative h-full p-6" >
              {showAllWallets ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={() => setShowAllWallets(false)} className="text-gray-400 hover:text-white">
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <h2 className="text-xl font-bold text-white">Connect your wallet</h2>
                    <button onClick={() => (window.location.href = "/")} className="text-gray-400 hover:text-white">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <WalletList />
                </>
              ) : (
                <>
                  <div className="flex justify-end">
                    <button onClick={() => (window.location.href = "/")} className="text-gray-400 hover:text-white">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="text-center mt-8 mb-12">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full p-2">
                      <img src="/img/tezos-xtz-logo.png" alt="Tezos" className="h-full w-full" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Connect to Wallet</h2>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => window.open("https://metamask.io/download", "_blank")}
                      className="flex w-full items-center gap-3 rounded-lg bg-gray-800/50 p-3 hover:bg-gray-700/50"
                    >
                      <img src="/wallets/images.png" alt="MetaMask" className="h-8 w-8" />
                      <span className="text-white">MetaMask</span>
                    </button>

                    <button
                      onClick={() => window.open("https://keys.coinbase.com/onboarding", "_blank")}
                      className="flex w-full items-center gap-3 rounded-lg bg-gray-800/50 p-3 hover:bg-gray-700/50"
                    >
                      <img src="/wallets/coinbase.png" alt="Coinbase Wallet" className="h-8 w-8" />
                      <span className="text-white">Coinbase Wallet</span>
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-lg bg-gray-800/50 p-3 hover:bg-gray-700/50">
                      <img src="/wallets/W.png" alt="WalletConnect" className="h-8 w-8" />
                      <span className="text-white">WalletConnect</span>
                    </button>

                    <button
                      onClick={() => setShowAllWallets(true)}
                      className="w-full text-center text-sm text-gray-400 hover:text-white"
                    >
                      More wallet options
                    </button>

                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-transparent px-2 text-sm text-gray-400">OR</span>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full rounded-lg bg-gray-800/50 px-4 py-3 pr-12 text-white placeholder-gray-400"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-blue-500 p-1.5 hover:bg-blue-600">
                        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <p className="text-center text-xs text-gray-400">
                      If you haven't logged in using your email before, you will create a new wallet using this email.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Audio Control */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors z-50"
      >
        {isPlaying ? <Volume2 className="h-6 w-6 text-white" /> : <VolumeX className="h-6 w-6 text-white" />}
      </button>

      <audio
        ref={audioRef}
        loop
        src="/audio/chill-vibes-lofi-chill-hiphop-background-music-304596.mp3"
        className="hidden"
      />
    </div>
  )
}
