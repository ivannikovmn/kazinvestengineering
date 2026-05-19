export default function ChatMessages({
    messages
  }: {
    messages: {
      text: string
      role: "user" | "assistant"
    }[]
  }) {
    return (
      <div className="mb-6 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.role === "user"
                ? "text-right text-blue-300"
                : "text-left text-white"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
    )
  }