import React from 'react';

export default function SimilarItems(props) {

  const { allProducts, tag } = props;
  let similar = [];

  console.log(tag)

  allProducts.forEach((shoe) => {
    if (shoe.tag.includes(tag)) {
      similar.push(shoe)
    };

  })

  console.log(similar)


  return (
    <div>
      Will do some math do display three random shoes.
    </div>
  );
};
