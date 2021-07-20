import DownloadCard from "../components/DownloadCard";
import lighthouse from "../lighthouse.png";
import { useState, useEffect } from "react";

const Downloads = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lighthouse-os/official_devices/raft/official_devices.json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (data === undefined) {
          setData(Object.values(responseJson));
        }
      });
  }, [data]);

  return (
    
    <div className="h-auto lg:h-screen lg:flex flex-col mb-20" id="downloads">
      <div className="w-full bg-gray-700 h-1/3 lg:w-full flex flex-col justify-center items-center">
        <img src={lighthouse} className="w-1/2.5 my-4 h-28"/>
        <h1 className="text-center text-white text-2xl lg:text-6xl font-semibold mb-5">
          Downloads
        </h1>
      </div>
      <div className="flex flex-wrap">
        {
          data?.map((device)=> <DownloadCard name={device.name} brand={device.brand} codename={device.codename.toLowerCase()} maintainer={device.supported_versions[0].maintainer_name}/>)
        }
      </div>
    </div>
  );
};

export default Downloads;
