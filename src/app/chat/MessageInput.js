export default function MessageInput({ input, setInput, onSend }) {
    return (
      <div className="w-full bg-zinc-900/80 px-4 py-4 border-t border-white/10 flex items-center gap-2 backdrop-blur-md">
        <textarea
          className="flex-1 resize-none bg-zinc-800 text-white p-3 rounded-lg border border-purple-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={1}
          placeholder="I'm going to Boston on May 20, leaving from NYC, and I want to stop at Providence and Plymouth along the way."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <button
          onClick={onSend}
          className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg font-semibold transition shadow-md"
        >
          Send
        </button>
      </div>
    );
  }