"use client";
import { useState } from "react"
import { Search, Menu, MoreHorizontal } from "lucide-react"
import { NftGrid } from "@/components/nft-grid"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Dropdown } from "@/components/dropdown"
import { ViewToggle } from "@/components/view-toggle"

export default function Page() {
  const [activeTab, setActiveTab] = useState("Items")
  const [view, setView] = useState("grid")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const tabs = ["Items", "Offers", "Analytics", "Activity"]

  return (
    <div className="min-h-screen bg-black text-white"> 
      <Header />
      <main>
        <div className="relative">
          <div className="h-[700px] w-full overflow-hidden">
            <img src="/img/anime2.webp" alt="Hero Banner"className="h-full w-full object-cover"/>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent px-4 py-4">
            <div className="container mx-auto">
              <div className="flex items-end justify-between">
                <div className="flex items-end gap-4">
                  <img
                    src="/img/Rename.png"
                    alt="Collection Logo"
                    className="h-[100px] w-[100px] rounded-lg border border-white/10"
                  />
                  <div>
                    <h1 className="text-2xl font-bold mb-1">Thinking Forest</h1>
                    <p className="text-gray-300 text-sm mb-2">NFT for sophisticated chads.</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>Items 12</span>
                      <span>•</span>
                      <span>Created Jun 2024</span>
                      <span>•</span>
                      <span>Creator earnings 0%</span>
                      <span>•</span>
                      <span>Chain Polygon</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-6 text-right">
                  <div>
                    <div className="text-lg font-bold">0 ETH</div>
                    <div className="text-xs text-gray-400">Total volume</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">0.02 ETH</div>
                    <div className="text-xs text-gray-400">Floor price</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">--</div>
                    <div className="text-xs text-gray-400">Best offer</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">6%</div>
                    <div className="text-xs text-gray-400">Listed</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">1</div>
                    <div className="text-xs text-gray-400">Owner</div>
                  </div>
                  <button className="ml-2">
                    <MoreHorizontal className="h-5 w-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 border-b border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-3 px-2 relative text-sm ${
                  activeTab === tab ? "text-white font-medium" : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
              </button>
            ))}
          </div>

          <div className="flex gap-6 py-4">
            {isSidebarOpen && <Sidebar />}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-1.5 hover:bg-white/10 rounded-md"
                  >
                    <Menu className="h-4 w-4" />
                  </button>
                  <button className="flex items-center gap-2 text-xs">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </button>
                  <div className="h-3 w-px bg-white/10" />
                  <div className="text-xs text-gray-400">12 results</div>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or trait"
                      className="w-60 rounded-lg bg-white/10 pl-8 pr-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Dropdown
                    options={["Price low to high", "Price high to low", "Recently listed", "Recently created"]}
                    defaultOption="Price low to high"
                  />
                  <ViewToggle view={view} onViewChange={setView} />
                </div>
              </div>
              <NftGrid view={view} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

