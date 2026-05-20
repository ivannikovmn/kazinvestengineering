type Props = {
  input: string
  setInput: (value: string) => void
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void
  startVoiceInput: () => void
  isListening: boolean
}
  
  export default function ChatInput({
    input,
    setInput,
    sendMessage,
    startVoiceInput,
    isListening
  }: Props) {
    
    return (
      <form
        onSubmit={sendMessage}
        className="mt-8 flex items-center gap-3 rounded-full border border-[#1d4c9b] px-4 py-3"
      >
        <button
          type="button"
          onClick={startVoiceInput}
          className="text-[#1d4c9b]"
        >
          {isListening ? "🎙️ recording" : "🎙️"}
        </button>
  
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Ask whatever you want"
          className="flex-1 outline-none text-white placeholder:text-[#98adce]"
        />
  
        <button
          type="submit"
          className="bg-[#1d4c9b] px-4 py-2 text-white rounded-xl"
        >
          &gt;
        </button>
      </form>
    )
  }