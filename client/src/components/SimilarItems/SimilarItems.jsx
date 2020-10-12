import React from 'react';
import './Similar.css';
import { Link } from 'react-router-dom';

export default function SimilarItems(props) {

  const { allProducts, tag, id } = props;
  let similar = [];
  let display = [];
  let rndm = 0;

  allProducts.forEach((shoe) => {

    if (shoe.tag.includes(tag)) {
      similar.push(shoe);
    };

  })

  const genSim = () => {

    similar.forEach((shoe) => {
      if (shoe._id.includes(id)) {
        similar.splice(rndm, 1);
      }
      rndm++;
      //I'm capitalizing on the fact that rndm is preset to 0 & later in the function it gets recycled for a 2nd purpose.
      //I have the ++ outside of the if in case the shoe that matches the id resides in index zero.
    })

    while (display.length < 3) {
      rndm = Math.floor((Math.random() * similar.length));
      display.push(similar.splice(rndm, 1));
    }
    console.log(display)
    console.log(display[2][0])
  }

  genSim();

  return (

    <div className={display[2][0] === undefined ? "similar-items-condensed" : "similar-items"}>

      { display[0][0] === undefined ?

        <div className="empty"></div>
        
        :
        
        <Link to={`/products/${display[0][0]._id}`} className="similar-item-container">
  
            <img className="similar-item-image" src={display[0][0].imgURL} alt="similar product one" />

        </Link>

      }

      { display[1][0] === undefined ?
      
        <div className="empty"></div>
        
        :
        
        <Link to={`/products/${display[1][0]._id}`} className="similar-item-container" >
    
            <img className="similar-item-image" src={display[1][0].imgURL} alt="similar product two" />

        </Link>

      }

      { display[2][0] === undefined ? 
        
        <div className="empty"></div>

        :

        <Link to={`/products/${display[2][0]._id}`}className="similar-item-container" >

            <img className="similar-item-image" src={display[2][0].imgURL} alt="similar product three" />

        </Link>

      }

    </div>

  );
};