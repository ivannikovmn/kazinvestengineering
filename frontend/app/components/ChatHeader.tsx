export default function ChatHeader() {
    return (
      <div>
        <div className="mb-6 flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d4c9b]">
            💬
          </div>
        </div>
  
        <h2 className="text-xl font-medium">
          Hi there!
        </h2>
  
        <h1 className="mt-2 text-4xl font-bold">
          What would you like to know?
        </h1>
  
        <p className="mt-4 text-[#98adce]">
          Use one of the most common prompts below or ask your own question
        </p>
      </div>
    )
  }