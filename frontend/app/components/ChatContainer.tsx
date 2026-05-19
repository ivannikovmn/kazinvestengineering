'use client'

import { useState } from "react"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import ChatHeader from "./ChatHeader"

type Message = {
    text: string
    role: "user" | "assistant"
  }


export default function ChatContainer() {  
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)


  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const userMessage = input
  
    setMessages(prev => [
      ...prev,
      { text: userMessage, role: "user" }
    ])
  
    setInput("")
    setLoading(true)
  
    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: userMessage
        })
      })
  
      const data = await response.json()
  
      setMessages(prev => [
        ...prev,
        { text: data.answer, role: "assistant" }
      ])
  
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { text: "Something went wrong", role: "assistant" }
      ])
  
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#072769]">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0b347f] p-8 text-white shadow-xl">

      {messages.length === 0 && <ChatHeader />}

        <ChatMessages messages={messages} />

        {loading && (
        <div className="text-[#98adce] mt-2">
            Assistant is typing...
        </div>
        )}

        <ChatInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        />

      </div>
    </section>
  )
}