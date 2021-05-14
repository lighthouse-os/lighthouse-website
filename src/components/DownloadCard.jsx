import React from 'react'
import Violet from '../violet.png'

const DownloadCard = () => {
    return (
        <div className="w-full lg:w-1/2 rounded-2xl border-gray-200 border-2 text-center p-5 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold text-center py-3">Redmi Note 7 Pro</h1>
                <h1 className="py-2 text-xl ">Violet</h1>
                <h1>Maintainer: <span>Galanteria01</span></h1>
                <div>
                    <button className="rounded-full bg-gray-600 p-2 text-white">Download</button>
                    <button className="rounded-full bg-gray-600 p-2 text-white">Changelogs</button>
                </div>
            
        </div>
    )
}

export default DownloadCard
