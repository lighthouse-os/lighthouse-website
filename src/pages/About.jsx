import AboutCard from "../components/AboutCard"

const About = () => {
    return (
        <div className="about min-h-auto bg-green-600" id="about">
            <h1 className="text-center font-sans text-4xl font-semibold p-5 text-white my-18">About The Project</h1>
            <div className="flex flex-wrap justify-around">
                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Performance</h2>
                        <p class="mt-2 text-gray-600"><strong>Our Primary Goal</strong> is to keep the bloat to a minial and optimise the source which translates to a very snappy and smooth user experience that you definately deserve.</p>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Security Patches</h2>
                        <p class="mt-2 text-gray-600"><strong>Privacy and Security</strong> being the apex of ones digital identity, you can trust us with merging the latest security patches from Google every month as soon as they launch.</p>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Customisation</h2>
                        <p class="mt-2 text-gray-600"><strong>Minimal But Not Bare.</strong> This being our moto, we ensure to provide a experience that is not only smooth and snappy but fairly customisable as well! Just to fit your creative needs.</p>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Dogfooding</h2>
                        <p class="mt-2 text-gray-600"><strong>We Are Passionate.</strong> As young blood eager to know more, we will listen. Using our own ROM on a daily basis we get to know its shortcommings. We are also very friendly and are eager to see your thoughts on the ROM.</p>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default About
