export default function Home() {
    return(
        <div className="pl-30">
            <h1 className="w-78.75 h-18 text-4xl content-center font-extrabold">CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus velit perspiciatis eligendi necessitatibus fugit harum eos officia exercitationem culpa. <br/>
               Labore, accusantium consectetur amet dicta pariatur maiores autem maxime officiis.</p>
            <div className="w-290.24 h-150 flex justify-between">
                <div className="w-118 h-114.25 py-10 flex flex-col justify-center items-center">
                    <div className="flex h-11 w-full justify-between text-white">
                        <button className="bg-black w-55">VIA SUPPORT CHAT</button>
                        <button className="bg-black w-55">VIA CALL</button>
                    </div>
                    <button className="h-11 w-full border-2 border-black">VIA EMAIL FORM</button>
                    <div className="w-110 h-82.25">
                        <div className="h-67 flex flex-col gap-5 pt-5">
                            <div className="h-12.5"><input type="text" placeholder="Name" className="h-10 w-full placeholder:-translate-y-6 placeholder:translate-x-4 border-2 border-black"/></div>
                            <div className="h-12.5"><input type="email" className="h-10 w-full placeholder:-translate-y-6 placeholder:translate-x-4 border-2 border-black" placeholder="E-Mail"/></div>
                            <textarea type="text" className="h-32.25 border-2 border-black" placeholder="TEXT"></textarea>
                        </div>
                    </div>
                </div>
                <img src="/images/Service 24_7-pana 1.svg" className="w-152 h-153.75"/>
            </div>
        </div>
    )
}