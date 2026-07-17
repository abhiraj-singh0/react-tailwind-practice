
function App() {
  return(

    <div className="p-0 m-0 h-screen flex flex-col">
      <nav className="flex justify-around items-center h-18">
        <div>
          <img src="/images/brand_logo.png"/>
        </div>
        <ul className="flex gap-3">
          
          <li><a href="">MENU</a></li>
          <li><a href="">LOCATION</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONATCT</a></li>
        </ul>

        <div>
          <a href="" className="h-8 w-18.75 bg-red-600 text-white flex justify-center items-center">Login</a>
        </div>
      </nav>

      <div className="w-full flex justify-center items-center h-196">
        <div className="w-281.25 h-153.25">
          <div><h1 className="text-7xl font-bold h-76.5 w-148.75">YOUR FEET<br/>
            DESERVE <br/>
            THE BEST</h1></div>

          <div>
            <img src="/images/shoe_image.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;