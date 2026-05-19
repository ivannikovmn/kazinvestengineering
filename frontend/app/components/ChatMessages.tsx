type Message = {
    text: string
  }
  
  export default function ChatMessages({ messages }: { messages: Message[] }) {
    return (
      <div className="mb-6 space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className="text-white">
            {msg.text}
          </div>
        ))}
      </div>
    )
  }