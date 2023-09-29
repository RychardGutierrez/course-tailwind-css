export default function Home() {
  return (
    <div className="h-screen bg-slate-400">
      <div className="container mx-auto gap-4">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-red-400">1</div>
          <div className="bg-red-400">2</div>
          <div className="bg-red-400">3</div>
          <div className="bg-blue-400 col-span-3">4</div>
          <div className="bg-red-400">5</div>
          <div className="bg-red-400">6</div>
        </div>
        <br></br>
        <hr />
        <br></br>
        <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-2">
          <div className="bg-red-400 col-start-2 col-span-4">1</div>
          <div className="bg-red-400 col-start-1 col-end-3">2</div>
          <div className="bg-red-400 col-end-7">3</div>
          <div className="bg-blue-400 col-start-1 col-end-7">4</div>
        </div>

        <br></br>
        <hr />
        <br></br>
        <div className="grid gap-4 grid-flow-row auto-cols-auto">
          <div className="bg-red-400 ">1</div>
          <div className="bg-red-400 ">2</div>
          <div className="bg-red-400 ">3</div>
          <div className="bg-blue-400 ">4</div>
        </div>

        <br></br>
        <hr />
        <br></br>
        <div className="grid gap-3 grid-rows-3 grid-flow-col">
          <div className="bg-orange-400 col-span-2">1</div>
          <div className="bg-red-400 col-span-2">2</div>
          <div className="bg-red-400 ">3</div>
          <div className="bg-blue-400 ">4</div>
          <div className="bg-red-400 ">5</div>
          <div className="bg-blue-400 ">6</div>
        </div>
      </div>
    </div>
  );
}
