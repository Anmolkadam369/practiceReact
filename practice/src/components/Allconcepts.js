import React from 'react';


const Allconcepts = (props)=>{
    console.log("propsssssssss ",props.children)
    return (
        <div>
            <ul id="concepts">
        <li className="concept">
          <img src={props.children[0].image} alt="TODO: component" />
          <h2>{props.children[0].title}</h2>
          <p>{props.children[0].description}</p>
        </li>
      </ul>

      <ul id="concepts">
        <li className="concept">
          <img src={props.children[1].image} alt="TODO: component" />
          <h2>{props.children[1].title}</h2>
          <p>{props.children[1].description}</p>
        </li>
      </ul>

      <ul id="concepts">
        <li className="concept">
          <img src={props.children[2].image} alt="TODO: component" />
          <h2>{props.children[2].title}</h2>
          <p>{props.children[2].description}</p>
        </li>
      </ul>
      <ul id="concepts">
        <li className="concept">
          <img src={props.children[3].image} alt="TODO: state" />
          <h2>{props.children[3].title}</h2>
          <p>{props.children[3].description}</p>
        </li>
      </ul>
        </div>
    )
}

export default Allconcepts;