export default function Sidebar() {
    return (
      <aside className="w-64 bg-zinc-900/70 border-r border-white/10 p-4 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">WayWise.ai</h2>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition shadow">
          + New Trip
        </button>
  
        
      </aside>
    );
  }
  