export default function Home() {
  return (
    <div className="parent">
      <header>Header</header>
      <div className="flex flex-row-reverse">
        <div>Main content</div>
        <div className="flex flex-col-reverse">
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
      </div>

      <div className="flex">
        <div className="grow">Main content</div>
        <div className="flex flex-col flex-none">
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
      </div>

      <div className="flex">
        <div className="basis-4/12">Main content</div>
        <div className="basis-6/12">side bar</div>
        <div className="basis-2/12">Another side bar</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-32 bg-slate-400">Main content</div>
        <div className="w-full bg-red-300">side bar</div>
      </div>

      {/* <div className="flex flex-nowrap gap-4"> */}
      <div className="flex flex-wrap gap-4 mt-5">
        <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          01
        </div>
        <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          02
        </div>
        <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          03
        </div>
        <div className="p-4 w-full rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          04
        </div>
      </div>

      <div className="">
        <div className="">Header</div>
        {/* justify-end, justify-center, justify-between, justify-around, justify-evenly  */}
        {/* items-end, items-center, items-baseline, items-stretch  */}
        <div className="flex justify-evenly items-baseline`">
          <div className="pt-2">Sidebar</div>
          <div className="pt-8">
            <h1 className="text-2xl">Main content</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              possimus corporis, et perferendis dolorem incidunt libero
              voluptatem optio ullam dicta velit nobis, corrupti labore fugiat
              ex, unde at dolor. Harum.
            </p>
          </div>
          <div className="pt-12">Another content</div>
        </div>
      </div>
    </div>
  );
}
