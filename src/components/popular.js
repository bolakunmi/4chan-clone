import React, { useEffect, useState } from "react";

const popularUrl =
  "https://github.com/plebbit/temporary-default-subplebbits/blob/master/subplebbits.json";
  

const UseEffectFetchPopularData = () => {
  const [popular, setPopular] = useState([]);

  // const get_popular = () => {
  //   return fetch(popularUrl, { mode: "no-cors" })
  //     .then((response) => response.json())
  //     .then((fetched) => {
  //       return setPopular(fetched);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const get_popular = async () => {
    console.log("begin");
    const response = await fetch(popularUrl);
    console.log(response)
    const fetched = await response.json();
    console.log(fetched, "sdjbdujbu");
    setPopular(fetched);
  };

  useEffect(() => {
    get_popular();
  });

  console.log(popular, "here");

  return (
    <React.Fragment>
      {popular.map((each) => {
        const { name, img, description } = each;
        const index = popular.indexOf(each);
        return (
          <div className="popular_thread" key={index}>
            <h6>{name}</h6>
            <img src={img} alt={name} />
            <p>{description}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default UseEffectFetchPopularData;
