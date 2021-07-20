import React, { useState, useEffect } from 'react'


const DownloadCard = ({name,maintainer,codename,brand}) => {
    
    const [data, setData] = useState();

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/lighthouse-os/official_devices/raft/builds/"+codename+".json"
        )
          .then((response) => response.json())
          .then((responseJson) => {
            if (data === undefined) {
              setData(Object.values(responseJson));
            }
        });
    }, [data]);
    
    if (data !== undefined){
        const cl = "https://raw.githubusercontent.com/lighthouse-os/official_devices/raft/changelogs/"+codename+"/"+data[3]+".txt"
        const url = data[4]

        return (
                <div className="m-2 rounded-2xl border-gray-200 border-2 text-center p-10 flex flex-col max-w-max flex-auto items-center justify-center mx-auto mt-20">
                    <h1 className="text-2xl font-semibold text-center py-3">{brand} {name}</h1>
                    <h1 className="py-2 text-xl ">{codename}</h1>
                    <h1>Maintainer: <span>{maintainer}</span></h1>
                    <div>
                    <a target="blank" href={url}><button className="rounded-full bg-gray-600 p-2 text-white" >Download</button></a>
                    <a target="blank" href={cl}><button className="rounded-full bg-gray-600 p-2 text-white" >Changelog</button></a>
                    </div>
            </div>
        )
    }
    else {
        return <div></div>;
    }
}

export default DownloadCard
