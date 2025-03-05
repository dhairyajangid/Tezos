"use client"

import { useState } from "react"
import { X, ChevronLeft } from "lucide-react"
import { WalletList } from "./wallet-list"

export function WalletModal({ isOpen, onClose }) {
  const [showAllWallets, setShowAllWallets] = useState(false)
  const [email, setEmail] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-md rounded-2xl bg-gray-900 p-6">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X className="h-6 w-6" />
        </button>

        {showAllWallets ? (
          <>
            <button
              onClick={() => setShowAllWallets(false)}
              className="absolute left-4 top-4 text-gray-400 hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="mb-6 text-center text-2xl font-bold text-white">Connect your wallet</h2>
            <WalletList />
          </>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-500 p-2">
                <img src="/img/tezos-xtz-logo.png" alt="Tezos" className="h-full w-full" />
              </div>
              <h2 className="text-2xl font-bold text-white">Connect to Tezos</h2>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.open("https://metamask.io/download", "_blank")}
                className="flex w-full items-center gap-3 rounded-lg bg-gray-800 p-3 hover:bg-gray-700"
              >
                <img src="wallets/images.png" alt="MetaMask" className="h-8 w-8" />
                <span className="text-white">MetaMask</span>
              </button>

              <button
                onClick={() => window.open("https://keys.coinbase.com/onboarding", "_blank")}
                className="flex w-full items-center gap-3 rounded-lg bg-gray-800 p-3 hover:bg-gray-700"
              >
                <img src="wallets/coinbase.png" alt="Coinbase Wallet" className="h-8 w-8" />
                <span className="text-white">Coinbase Wallet</span>
              </button>

              <button className="flex w-full items-center gap-3 rounded-lg bg-gray-800 p-3 hover:bg-gray-700">
                <img src="wallets/W.png" alt="WalletConnect" className="h-8 w-8" />
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
                  <span className="bg-gray-900 px-2 text-sm text-gray-400">OR</span>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 pr-12 text-white placeholder-gray-400"
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
  )
}

