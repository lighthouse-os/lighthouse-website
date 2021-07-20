import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';

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
          <div className="mx-auto ">
                <div className="bg-indigo-50 m-2 rounded-2xl border-gray-200 border-2 text-center p-10 max-w-max items-center justify-center  m-10 mt-20" >
                    <h1 className="text-2xl font-semibold text-center py-3">{brand} {name}</h1>
                    <h1 className="py-2 text-xl ">{codename}</h1>
                    <h1>Maintainer: <span>{maintainer}</span></h1>
                    <div>
                    <Button variant="outlined" color="primary" style={{margin: 10}} target="_black" href={url}>DOWNLOAD</Button>
                    <Button variant="outlined" color="secondary" style={{margin: 10}} target="_black" href={cl}>CHANGELOG</Button>
                    </div>
              </div>
            </div>
        )
    }
    else {
        return <div></div>;
    }
}

export default DownloadCard
