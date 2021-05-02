
const Team = () => {
    return (
        <div className="team bg-blue-400" id="team">
            <h1 className="text-center font-sans text-4xl font-semibold p-5 text-white">Meet our team</h1>
            <div className="team__members flex justify-around">
                <figure class="bg-gray-100 rounded-xl p-8 w-1/4 m-8">
                <img class="w-32 h-32 rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" width="384" height="512" />
                <div class="pt-6 space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-cyan-600">
                        Vyom Desai
                    </div>
                    <div class="text-gray-500">
                        Core Developer, India
                    </div>
                    </figcaption>
                </div>
                </figure>

                <figure class="bg-gray-100 rounded-xl p-8 w-1/4 m-8">
                <img class="w-32 h-32 rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" width="384" height="512" />
                <div class="pt-6 space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-cyan-600">
                        Shoury Sharma
                    </div>
                    <div class="text-gray-500">
                        Core Developer, India
                    </div>
                    </figcaption>
                </div>
                </figure>

                <figure class="bg-gray-100 rounded-xl p-8 w-1/4 m-8">
                <img class="w-32 h-32 rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" width="384" height="512" />
                <div class="pt-6 space-y-4">
                    <figcaption class="font-medium">
                    <div class="text-cyan-600">
                        Rishawn Iyer
                    </div>
                    <div class="text-gray-500">
                        Core developer, India
                    </div>
                    </figcaption>
                </div>
                </figure>
            </div>
        </div>
    )
}

export default Team
