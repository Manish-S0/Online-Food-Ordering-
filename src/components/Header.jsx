
const Header = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-center h-[400px] relative ml-10 mr-10'>
      <div className="absolute flex flex-col items-start gap-1 bottom-10 left-10">
        <h2 className="font-[500] text-4xl lg:text-6xl text-white">Order your favourite food here</h2>
        <p className="text-white">Choose food from your favourite restaurant</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-xl'>View Menu</button>
      </div>
    </div>
  )
}

export default Header