import { LayoutGrid, LayoutList, Rows } from "lucide-react"

export function ViewToggle({ view, onViewChange }) {
  return (
    <div className="flex items-center gap-2 bg-gray-800 rounded-md p-1">
      <button
        onClick={() => onViewChange("list")}
        className={`p-1.5 rounded ${view === "list" ? "bg-gray-700" : "hover:bg-gray-700"}`}
      >
        <LayoutList className="h-4 w-4" />
      </button>
      <button
        onClick={() => onViewChange("grid")}
        className={`p-1.5 rounded ${view === "grid" ? "bg-gray-700" : "hover:bg-gray-700"}`}
      >
        <LayoutGrid className="h-4 w-4" />
      </button>
      <button
        onClick={() => onViewChange("rows")}
        className={`p-1.5 rounded ${view === "rows" ? "bg-gray-700" : "hover:bg-gray-700"}`}
      >
        <Rows className="h-4 w-4" />
      </button>
    </div>
  )
}

