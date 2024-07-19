
import { menu_list } from '../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <>
    <div className='mx-10 mt-4'>
      <h1 className='text-4xl'>Explore our Menu</h1>
      <div className='flex justify-between  gap-5 text-center overflow-x-scroll mt-6'>
        {menu_list.map((menu) => (

          <div onClick={() => setCategory(menu.menu_name)} key={menu.menu_name} className='h-full w-full '>
            <img src={menu.menu_image} alt="" className={category === menu.menu_name? 'border-2 border-red-500 rounded-full w-[7.5rem] min-w-[80px] cursor-pointer p-1 ' : 'w-[7.5rem] min-w-[80px] cursor-pointer'} />
            <h1 className='mt-2 cursor-pointer'>{menu.menu_name}</h1>
          </div>
        ))}
      </div>
    </div>
    <hr className='mx-10 h-1 bg-slate-600 border-none my-10'/>
    </>
  )
}

export default ExploreMenu