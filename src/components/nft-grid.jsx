const nfts = [
    {
      id: 1,
      name: "Batman Thinking",
      price: "0.02 ETH",
      image: "/img/Batman.png",
    },
    {
      id: 2,
      name: "Black Panther Thinking",
      price: "0.02 ETH",
      image: "/img/Black-panther.png",
    },
    {
      id: 3,
      name: "Captain America Thinking",
      price: "0.02 ETH",
      image: "/img/Cap.png",
    },
    {
      id: 4,
      name: "Monkey D. Luffy Thinking",
      price: "0.02 ETH",
      image: "/img/Luffy.png",
    },
    {
      id: 5,
      name: "Akky Thinking",
      price: "0.02 ETH",
      image: "/img/Akky.png",
    },
    {
      id: 6,
      name: "Tenka Izumo Thinking",
      price: "0.02 ETH",
      image: "/img/anime1.webp",
    },
    {
      id: 7,
      name: "zoro Thinking",
      price: "0.02 ETH",
      image: "/img/Zoro.png",
    },
    {
      id: 8,
      name: "Naruto Thinking",
      price: "0.02 ETH",
      image: "/img/Naruto.png",
    },
    {
      id: 9,
      name: "Spider-Man Thinking",
      price: "0.02 ETH",
      image: "/img/Spider-man.png",
    },
    {
      id: 10,
      name: "Guts Thinking",
      price: "0.02 ETH",
      image: "/img/Guts.png",
    },
    {
      id: 11,
      name: "Iron-Man Thinking",
      price: "0.02 ETH",
      image: "/img/Iron-man.png",
    },
    {
      id: 12,
      name: "Venom Thinking",
      price: "0.02 ETH",
      image: "/img/Venom.png",
    },
    // Add more NFTs here
  ]
  
  export function NftGrid({ view = "grid" }) {
    const gridClasses = {
      grid: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      list: "flex flex-col gap-4",
      rows: "grid grid-cols-1 gap-4",
    }
  
    const itemClasses = {
      grid: "overflow-hidden rounded-lg bg-gray-800",
      list: "flex items-center gap-4 rounded-lg bg-gray-800 p-4",
      rows: "flex items-center gap-4 rounded-lg bg-gray-800 p-4",
    }
  
    const imageClasses = {
      grid: "h-[300px] w-full object-cover",
      list: "h-20 w-20 rounded-md object-cover",
      rows: "h-20 w-20 rounded-md object-cover",
    }
  
    return (
      <div className={gridClasses[view]}>
        {nfts.map((nft) => (
          <div key={nft.id} className={itemClasses[view]}>
            <img src={nft.image || "/placeholder.svg"} alt={nft.name} className={imageClasses[view]} />
            <div className="p-4">
              <h3 className="font-semibold">{nft.name}</h3>
              <p className="text-sm text-gray-400">{nft.price}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  