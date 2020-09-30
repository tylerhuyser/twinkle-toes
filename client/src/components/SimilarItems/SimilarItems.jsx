import React from 'react';

export default function SimilarItems(props) {

  const { allProducts, tag } = props;
  let similar = [];
  let display = [];
  let rndm = 0;
  console.log(tag)

  allProducts.forEach((shoe) => {
    if (shoe.tag.includes(tag)) {
      similar.push(shoe)
    };

  })

  console.log(similar);

  const genSim = () => {
    if (similar.length > 3) {

      while (display.length < 3) {
        rndm = Math.floor((Math.random() * similar.length));
        display.push(similar.splice(rndm, 1))
        console.log(display)
        console.log(similar)
      }
    }
    else (
      similar.forEach((shoe) => {
        display.push(shoe)
      })
    )

  }


  genSim()

  return (
    <div>
      Will do some math do display three random shoes.
      <br />
      shoe1={display[0][0].name}
      <br />
      shoe2={display[1][0].name}
      <br />
      shoe3={display[2][0].name}

    </div>
  );
};
