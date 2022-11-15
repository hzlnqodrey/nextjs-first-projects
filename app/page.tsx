export default function Page() {

  const names: string[] = ["Rivano ATK", "Hazlan Muhammad Qodri", "Riko", "Fauzan"]

  return (
    <div className="container mx-auto px-20 py-10 border-1 border-red">
      <main className="flex flex-col justify-center align-bottom text-green-400 border-2 border-sky-500">
        <h1 className="text-3xl font-bold underline text-center">
          Hello, Next.js!
        </h1>
      
        <ul className="list-none border-4  border-red-500 text-center mt-5">
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}