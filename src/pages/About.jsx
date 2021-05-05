import AboutCard from "../components/AboutCard"

const About = () => {
    return (
        <div className="about min-h-auto bg-green-600" id="about">
            <h1 className="text-center font-sans text-4xl font-semibold p-5 text-white my-18">About Project</h1>
            <div className="flex flex-wrap justify-around">
                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Performance</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Security Patches</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Customisations</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
                    </div>
                </div>

                <div class="w-full md:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg m-10">
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold">Support</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
                    </div>
                </div>

            
            </div>
            
        </div>
    )
}

export default About
