import React from 'react'

const DownloadCard = () => {
    return (
        <div className="w-full h-auto rounded-2xl border-gray-200 border-2 text-center">
            <h1>Redmi Note 7 Pro</h1>
            <h1>Violet</h1>
            <h1>Maintainer: <span>Galanteria01</span></h1>
            <div>
                <button className="rounded-full bg-gray-600 p-2 text-white">Download</button>
                <button className="rounded-full bg-gray-600 p-2 text-white">Changelogs</button>
            </div>
        </div>
    )
}

export default DownloadCard
