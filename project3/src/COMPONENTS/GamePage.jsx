function GamePage() {
    return(
        <div className="h-screen">
            <div className="h-37.75 flex justify-between items-center px-20 pt-15">
                <div className="w-33.75 h-full flex flex-col justify-center items-center">
                    <h1 className="text-8xl">0</h1>
                    <h3 className="font-medium">Total Score</h3>
                </div>
                <div className="flex flex-col gap-6 h-34.5">
                    <div className="w-138 flex gap-5">
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">1</button>
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">2</button>
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">3</button>
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">4</button>
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">5</button>
                        <button className="w-18 h-18 bg-white text-black border border-black hover:bg-black hover:text-white font-bold">5</button>
                    </div>
                    <div className="flex justify-end w-134"><h1 className="font-bold">Select Number</h1></div>
                </div>
            </div>
        </div>
    )
}

export default GamePage