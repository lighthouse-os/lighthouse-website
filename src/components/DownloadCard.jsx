import React from 'react'

const DownloadCard = ({name,maintainer,codename}) => {
    return (
        <div className="w-full lg:w-1/2 rounded-2xl border-gray-200 border-2 text-center p-5 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold text-center py-3">{name}</h1>
                <h1 className="py-2 text-xl ">{codename}</h1>
                <h1>Maintainer: <span>{maintainer}</span></h1>
                <div>
                    <button className="rounded-full bg-gray-600 p-2 text-white">Download</button>
                    <button className="rounded-full bg-gray-600 p-2 text-white">Changelogs</button>
                </div>
            
        </div>
    )
}

export default DownloadCard
