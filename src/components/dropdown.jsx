import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Dropdown({ options, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-48 px-4 py-2 bg-gray-800 rounded-md text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => {
                setSelectedOption(option)
                setIsOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

