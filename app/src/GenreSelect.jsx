import React, {Component} from "react"; 

class GenreSelect extends Component { 
  render() { 

    const items = ["rock", "pop", "hip-hop","pop","indie","electronic","jazz","classical","country","folk","latin"];

    const checkBoxes = items.map((item) => {
      return (
        <div className="column is-one-quarter">
          <div className="box">
            <input type="checkbox" value={item}/>
            <label>{item}</label> 
          </div> 
        </div> 
      );
    });


    return(
      <div className="genre-container">
        <h2 className="subtitle has-text-centered is-size-2">Select your favourite genres</h2> 
        <div className="columns is-multiline"> 
          {checkBoxes}
        </div> 
       </div>   
    );
  };

}
export default GenreSelect;