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
            <div className="h-130 flex justify-center items-center">
                <div className="flex flex-col h-112.25 w-62.5 gap-4 items-center">
                    <img src="/images/dice_1.png" className="h-50 w-50 m-4"/>
                    <p>Click on dice to roll</p>
                    <button className="h-11 w-42.5 border border-black rounded-sm">Reset Score</button>
                    <button className="h-11 w-42.5 bg-black text-white rounded-sm">Show Rules</button>

                </div>
            </div>
        </div>
    )
}

export default GamePage