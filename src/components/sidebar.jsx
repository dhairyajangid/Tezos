import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Sidebar() {
  const [isPriceOpen, setIsPriceOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const statuses = ["All", "Listed", "On auction", "New", "Has offers"]
  const currencies = ["USD", "ETH", "WETH"]

  const handleApply = () => {
    console.log("Applying price filter:", { minPrice, maxPrice, currency: selectedCurrency })
    // Add your filter logic here
  }

  return (
    <div className="w-64 space-y-6">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Status</h3>
          <ChevronUp className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((status) => (
            <button
              key={status}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                selectedStatus === status ? "bg-white text-black" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              } ${status === "Listed" ? "flex items-center gap-2" : ""}`}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
              {status === "Listed" && <div className="h-2 w-2 rounded-full bg-green-500"></div>}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Price</h3>
          <button onClick={() => setIsPriceOpen(!isPriceOpen)}>
            {isPriceOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        {isPriceOpen && (
          <div className="space-y-4">
            <div className="relative">
              <button
                className="flex w-full items-center justify-between rounded-md bg-gray-800 px-4 py-2 text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedCurrency}</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 rounded-md bg-gray-800 py-1 shadow-lg">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      className="w-full px-4 py-2 text-left hover:bg-gray-700"
                      onClick={() => {
                        setSelectedCurrency(currency)
                        setIsDropdownOpen(false)
                      }}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-gray-400">to</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button onClick={handleApply} className="w-full rounded-md bg-blue-600 py-2 font-medium hover:bg-blue-700">
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

