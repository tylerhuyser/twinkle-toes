import React from 'react';
import './Similar.css';
import { Link } from 'react-router-dom';

export default function SimilarItems(props) {

  const { allProducts, tag } = props;
  let similar = [];
  let display = [];
  let rndm = 0;

  allProducts.forEach((shoe) => {
    if (shoe.tag.includes(tag)) {
      similar.push(shoe)
    };

  })

  const genSim = () => {
    if (similar.length > 3) {

      while (display.length < 3) {
        rndm = Math.floor((Math.random() * similar.length));
        display.push(similar.splice(rndm, 1))
      }

    } else (
      similar.forEach((shoe) => {
        display.push(shoe)
      })
    )

  }

  genSim()

  return (
    <div className="similar-items-flex-box">
      <div>
        <Link to={`/products/${display[0][0]._id}`}>
          <img className="similar-items-pic" src={display[0][0].imgURL} alt="similar product one" />
        </Link>
      </div>
      <div>
        <Link to={`/products/${display[1][0]._id}`} >
          <img className="similar-items-pic" src={display[1][0].imgURL} alt="similar product two" />
        </Link>
      </div>
      <div>
        <Link to={`/products/${display[2][0]._id}`} >
          <img className="similar-items-pic" src={display[2][0].imgURL} alt="similar product three" />
        </Link>
      </div>
    </div>
  );
};