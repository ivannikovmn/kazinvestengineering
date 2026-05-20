'use client'
import { useState, useRef } from "react"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import ChatHeader from "./ChatHeader"

declare global {
    interface Window {
      SpeechRecognition: any
      webkitSpeechRecognition: any
    }
  }

type Message = {
    text: string
    role: "user" | "assistant"
  }


export default function ChatContainer() {  
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)


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

    const SpeechRecognition =
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition)

    const recognitionRef = useRef<any>(null)

    if (!recognitionRef.current && SpeechRecognition) {
    recognitionRef.current = new SpeechRecognition()
    recognitionRef.current.lang = "en-US"
    recognitionRef.current.continuous = false
    recognitionRef.current.interimResults = false
    }

    const startVoiceInput = () => {
        const recognition = recognitionRef.current
        if (!recognition) return
      
        setIsListening(true)
      
        recognition.start()
      
        recognition.onresult = (event: any) => {
          const text = event.results[0][0].transcript
          setInput(text)
        }
      
        recognition.onend = () => {
          setIsListening(false)
        }
      
        recognition.onerror = () => {
          setIsListening(false)
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
        startVoiceInput={startVoiceInput}
        isListening={isListening}
        />

      </div>
    </section>
  )
}