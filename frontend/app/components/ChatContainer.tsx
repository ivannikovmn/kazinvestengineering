'use client'

import { useState } from "react"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import ChatHeader from "./ChatHeader"


type Message = {
  text: string
}


export default function ChatContainer() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setMessages(prev => [...prev, { text: input }])
    setInput("")
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#072769]">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0b347f] p-8 text-white shadow-xl">

      {messages.length === 0 && <ChatHeader />}

        <ChatMessages messages={messages} />

        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}          
        />

      </div>
    </section>
  )
}