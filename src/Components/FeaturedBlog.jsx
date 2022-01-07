export default function FeaturedBlog() {
    const image = 'https://dummyimage.com/720x600'
    //const image = ''
    return (
        <section className="body-font">
            <div className="container mx-auto flex px-5 py-8 sm:py-24 md:flex-row flex-col items-center">
                {image && <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>}
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center max-w-screen-lg">
                    <h2 className="tracking-widest text-xs title-font font-bold text-indigo-700 mb-1">CATEGORY | 12th Jan, 2022</h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">Before they sold out
                        <br className="hidden lg:inline-block" />readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
