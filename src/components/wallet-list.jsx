export function WalletList() {
    const wallets = [
      {
        name: "MetaMask",
        icon: "/wallets/images.png",
        url: "https://metamask.io/download",
        tag: "Popular",
      },
      {
        name: "Coinbase Wallet",
        icon: "/wallets/coinbase.png",
        url: "https://keys.coinbase.com/onboarding",
        tag: "Popular",
      },
      {
        name: "WalletConnect",
        icon: "/wallets/W.png",
        url: null,
        tag: "Popular",
      },
      {
        name: "Phantom",
        icon: "/wallets/phantom.svg",
        url: "https://phantom.com/",
        tag: null,
      },
      {
        name: "Zerion",
        icon: "/wallets/zerion.png",
        url: null,
        tag: null,
      },
      {
        name: "BitGet Wallet",
        icon: "/wallets/bitget.png",
        url: "https://web3.bitget.com/en/wallet-download",
        tag: null,
      },
      {
        name: "Kaikas",
        icon: "/wallets/kaikas.png",
        url: "http://chromewebstore.google.com/detail/kaia-wallet/jblndlipeogpafnldhgmapagcccfchpi",
        tag: "Klayt",
      },
      {
        name: "Core",
        icon: "/wallets/core.svg",
        url: "https://chromewebstore.google.com/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb",
        tag: "Avalanche",
      },
      {
        name: "Temple",
        icon: "/wallets/temple.png",
        url: "https://www.templewallet.com/",
        tag: "Tezos",
      },
    ]
  
    return (
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        <div className="space-y-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => wallet.url && window.open(wallet.url, "_blank")}
              className="flex w-full items-center justify-between rounded-lg bg-gray-800/50 p-3 hover:bg-gray-700/50"
            >
              <div className="flex items-center gap-3">
                <img src={wallet.icon || "/wallets/bad.svg"} alt={wallet.name} className="h-8 w-8" />
                <span className="text-white">{wallet.name}</span>
              </div>
              {wallet.tag && (
                <span className="rounded-md bg-gray-700/50 px-2 py-1 text-xs text-gray-400">{wallet.tag}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  