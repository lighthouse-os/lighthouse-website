import DownloadCard from "../components/DownloadCard";
import lighthouse from "../lighthouse.png";
import { useState, useEffect } from "react";

const Downloads = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lighthouse-os/official_devices/main/official_devices.json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (data === undefined) {
          setData(Object.values(responseJson));
        }
      });
  }, [data]);

  console.log(data);

  return (
    <div className="h-auto lg:h-screen lg:flex" id="downloads">
      <div className="w-full lg:w-1/2 bg-gray-700 h-auto lg:h-full flex flex-col justify-center items-center">
        <img src={lighthouse} className="h-1/5 w-1/4 my-4" />
        <h1 className="text-center text-white text-2xl lg:text-6xl font-semibold my-4">
          Downloads
        </h1>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {
          data?.map((device)=> <DownloadCard name={device.name} codename={device.codename} maintainer={device.supported_versions[0].maintainer_name}/>)
        }
      </div>
    </div>
  );
};

export default Downloads;
