

const Contact = () => {
  return (
    <div className="mb-[10px]">
      <div className='bg-contactImg bg-cover bg-center h-[320px] relative'>
        <div className="absolute flex flex-col w-full items-center bottom-[150px]">
          <h2 className="font-[500] text-5xl text-white">Order your favourite food here</h2>
          
        
        </div>
        
        
      </div>

      <div className="mt-[40px] flex justify-start ">
        <form className="max-w-lg mx-auto p-4 space-y-4">
          <div className=" my-3">
            <select
              id="help"
              required
              className="block w-full border-gray-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            >
              <option selected>How can we help you?</option>
              <option value="option2">I need help with my bhojan online order.

              </option>
              <option value="option3">
              I found incorrect/outdated information on a page.
              </option>
              <option value="option4">There is a photo/review that is bothering me and I would like to report it.
              </option>
              <option value="option5">I would like to give feedback/suggestions.
              </option>
              <option value="option6">Other</option>
            </select>
          </div>
          <div className=" my-3">
            <input
              type="text"
              id="fullName"
              required
              placeholder="Full Name*"
              className="block w-full p-2 my-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className=" my-3">
            <input
              type="email"
              id="email"
              required
              placeholder="Email Address*"
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-1 my-3">
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile Number (optional)"
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-1 my-3">
            <textarea
              id="message"
              required
              placeholder="Type text*"
              rows={6}
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-[#e06213] text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact