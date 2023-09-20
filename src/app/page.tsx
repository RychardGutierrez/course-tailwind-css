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
      <br />
      <br />
      <br />
      {/* Fonts */}
      <h1 className="text-9xl no-underline"> Title 1</h1>
      <h2 className="text-2xl overline decoration-wavy"> Title 2</h2>
      <h3 className="text-xl underline decoration-red-500 decoration-double underline-offset-8">
        {' '}
        Title 3
      </h3>
      <h4 className=" italic line-through leading-5"> Title 4</h4>
      <p className="text-base uppercase truncate">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        minima enim maiores doloremque quasi ex. Obcaecati quia dolorem fugit
        corrupti magni quod mollitia minus deleniti odio laborum. Ratione,
        nostrum?
      </p>
      <p className="text-sm leading-loose capitalize whitespace-nowrap w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        minima enim maiores doloremque quasi ex. Obcaecati quia dolorem fugit
        corrupti magni quod mollitia minus deleniti odio laborum. Ratione,
        nostrum?
      </p>
      <p className="text-xs note lowercase text-clip w-1/2 break-words">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        minima enim maiores
        doloremquedoloremquedoloremquedoloremquedoloremquedoloremquedoloremque
        quasi ex. Obcaecati quia dolorem fugit corrupti magni quod mollitia
        minus deleniti odio laborum. Ratione, nostrum?
      </p>
      <p className="text-xs note lowercase text-clip w-1/2 break-all">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
        minima enim maiores
        doloremquedoloremquedoloremquedoloremquedoloremquedoloremquedoloremque
        quasi ex. Obcaecati quia dolorem fugit corrupti magni quod mollitia
        minus deleniti odio laborum. Ratione, nostrum?
      </p>
    </main>
  );
}
