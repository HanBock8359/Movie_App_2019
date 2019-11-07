import React from 'react';
import PropTypes from "prop-types"

const foodIsLike = [
  {
    id: 1,
    name: "Kimchi",
    rating: 3.5,
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi35_nK-c_lAhWWITQIHRviACEQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.bibigo.com%2Fkr%2Fkorean-food-story-kimchi&psig=AOvVaw0Vc07Up7ShFIOan0SFnu7m&ust=1572936055197477"
  },
  {
    id: 2,
    name: "Pork belly",
    rating: 4.5,
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjap57W-c_lAhUwITQIHdPlDUAQjRx6BAgBEAQ&url=https%3A%2F%2Fppss.kr%2Farchives%2F106560&psig=AOvVaw1mbTyM5e9VVtxywuwQm6SS&ust=1572936076286792"
  },
  {
    id: 3,
    name: "Bibimbap",
    rating: 2.5,
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjfiee9-c_lAhWlHDQIHfOlBsYQjRx6BAgBEAQ&url=https%3A%2F%2Fkr.123rf.com%2Fphoto_80094680_%25EB%258F%258C%25EC%2586%25A5-%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5.html&psig=AOvVaw2Xm2VInOJrno6lc6xFYvP-&ust=1572936026933358"
  },
  {
    id: 4,
    name: "Doncasu",
    rating: 4.1,
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwin1tDf-c_lAhW5IjQIHRqQDpEQjRx6BAgBEAQ&url=https%3A%2F%2Fkr.123rf.com%2Fphoto_32034386_%25EC%259D%25BC%25EB%25B3%25B8%25EC%2596%25B4-%25EB%258F%2588%25EA%25B9%258C%25EC%258A%25A4-%25EB%258F%2588%25EA%25B9%258C%25EC%258A%25A4.html&psig=AOvVaw1TLHj7mTOfJByvQNK4txGQ&ust=1572936096391355"
  },
  {
    id: 5,
    name: "Gimbap",
    rating: 1.7,
    image:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiDxfzl-c_lAhVKFzQIHRqOCBEQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6861764&psig=AOvVaw2_mE8KRPUTLEgZu6Ri6QC2&ust=1572936115743475"
  }
]

function Food( {name, picture} ){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  );
}



function renderFood(dish){
  return (<Food name={dish.name} picture={dish.image} image={dish.image}/>);
}

function App() {
  return (<div>{foodIsLike.map(renderFood)}</div>);
}

export default App;
