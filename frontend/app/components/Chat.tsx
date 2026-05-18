'use client'

export default function ChatContainer() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#072769]">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0b347f] p-8 text-white shadow-xl">

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

        <form className="mt-8 flex items-center gap-3 rounded-full border border-[#1d4c9b] px-4 py-3">

          <button
            type="button"
            className="text-[#1d4c9b]"
          >
            🎙️
          </button>

          <input
            type="text"
            placeholder="Ask whatever you want"
            className="flex-1 outline-none text-black placeholder:text-[#98adce]"
          />

          <button
            type="submit"
            className="bg-[#1d4c9b] px-4 py-2 text-white rounded-xl"
          >
            &gt;
          </button>

        </form>

      </div>
    </section>
  )
}