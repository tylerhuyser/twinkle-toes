import React, { useState, useEffect } from 'react';

export default function SimilarItems(props) {

  const { allProducts, tag } = props;
  let similar = [];
  let display = [];
  let rndm = 0;
  const [isLoaded, setLoaded] = useState(false);

  allProducts.forEach((shoe) => {
    if (shoe.tag.includes(tag)) {
      similar.push(shoe)
    };

  })

  useEffect(() => {
    const genSim = () => {
      if (similar.length > 3) {

        while (display.length < 3) {
          rndm = Math.floor((Math.random() * similar.length));
          display.push(similar.splice(rndm, 1))
          console.log(display)
          console.log(similar)
        };
      } else (
        similar.forEach((shoe) => {
          display.push(shoe)
        })
      )
      setLoaded(true)
    };
    genSim();
  }, [similar]);





  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    // <div>
    //   Will do some math do display three random shoes.
    //   <br />
    //   shoe1={display[0][0].name}
    //   <br />
    //   shoe2={display[1][0].name}
    //   <br />
    //   shoe3={display[2][0].name}

    // </div>

    <div className="common-items-flex-box">
      {display.map((shoe, idx) => (
        <div className="common-items-link" key={idx}>
          <img src={shoe[idx][0].imgURL} alt={shoe[idx][0].name}></img>
        </div>
      ))}

    </div>
  );
};
