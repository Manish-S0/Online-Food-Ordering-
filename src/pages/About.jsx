import { assets } from "../assets/assets"
const About = () => {
  return (
    <div className=" my-[40px]">
      
      <div className="mx-10 flex gap-[40px] my-[30px]">
        <div >
          <h1 className="text-4xl font-semibold text-start">Who are we?</h1>
          <p className="max-w-[600px] pt-3">Launched in 2020, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
        </div>
        
        <div>
        
        <img src={assets.first_res} alt="" className="w-[450px]"/>
        </div>
        
      </div>

      <div className="bg-[#fe5005] w-full h-[370px] px-10 items-center mt-[30px]">
        <img src={assets.inverted_comma} alt="" className="pt-10"/>
        <p className="text-white text-[30px]">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It&apos;s what makes us get out of bed and say, &quot;Let&apos;s do this.&quot;</p>

      </div>
      <div className="mt-[50px]">
        <div className="text-center justify-center  mx-auto px-4 max-w-[900px]">
          <h1 className="text-[49px] text-[#303b3b] font-bold mb-4">What’s In Store For The Future?</h1>
          <p className="text-gray-600 text-lg">Bhojan has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
        </div>
        <hr className="my-20 h-[2px] bg-slate-300 border-none "/>
      </div>


      
      <div className="flex mb-[100px]">

        <div className="px-2 h-[150px] mx-10">
          <h1 className="text-[50px]">Changing</h1>
          <h1 className="text-[40px] font-bold text-gray-600">the game</h1>

        </div>
        <div className="flex ml-[170px]">
          <div className="px-2 h-[150px] w-[190px] mx-2">
            <div className="border-2 border-orange-500 rounded-md p-4  text-center w-full h-full">
              <h3 className="text-[40px] font-bold">15000+</h3>
              <p className="text-gray-600 text-[15px]">Restaurant Partners Countrywide</p>
            </div>
          </div>
          <div className="px-2 h-[150px] w-[190px] mx-2">
            <div className="border-2 border-orange-500 rounded-md p-4  text-center w-full h-full">
              <h3 className="text-[40px] font-bold">5000+</h3>
              <p className="text-gray-600 text-[15px]">Employees across the Country</p>
            </div>
          </div>
          <div className="px-2 h-[150px] w-[190px]">
            <div className="border-2 border-orange-500 rounded-md p-4  text-center w-full h-full">
              <h3 className="text-[40px] font-bold">26000+</h3>
                <p className="text-gray-600 text-[15px]">Delivery <br />Executives</p>
            </div>
          </div>
          <div className="px-2 h-[150px] w-[190px]">
            <div className="border-2 border-orange-500 rounded-md p-4  text-center w-full h-full">
              <h3 className="text-[40px] font-bold">500+</h3>
              <p className="text-gray-600 text-[15px]">Cities <br /> PAN India</p>
            </div>
          </div>  
        </div>
        
        
      </div>
      
    </div>
  )
}

export default About