export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <h1 className="text-green-400">Hello worl</h1>

      <h1 className="text-yellow-400">Yellow color</h1>

      <h1 className="bg-yellow-400 text-white">bg yellow color</h1>

      <div className="border-8 border-green-400">This is border</div>

      {/* Customer color */}
      <div className="text-vuejs">customer color vuejs</div>

      <div className="text-[#a2c434]">customer color vuejs 2</div>

      {/* Customer size */}
      <h1 className="text-sm sm:text-base md:text-3xl">Hello size</h1>

      {/* Customer spacing */}
      <p className="mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        incidunt totam commodi quo quibusdam beatae nesciunt nobis eaque ipsum
        a. Non quos reprehenderit quibusdam magnam perspiciatis temporibus
        mollitia facilis veritatis?
      </p>
    </main>
  );
}
