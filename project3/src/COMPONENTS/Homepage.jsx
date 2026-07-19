function Homepage() {
    return(
        <div className="flex justify-center items-center h-screen">
        <div className="w-295.5 h-130.5 flex">
            <img src="/images/dices 1.png" className="w-156.75 h-125"/>
            <div className="content-center">
                <div className="w-132 h-47 flex flex-col justify-around">
                    <h1 className="text-8xl font-bold w-132">DICE GAME</h1>
                    <div className="flex justify-end">
                        <button className="h-11 w-55 bg-black hover:bg-zinc-800 text-white rounded-sm">Play Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homepage