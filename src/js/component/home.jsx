// import React, { useState } from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {
// 	const[inputVal, setInput] = useState([])


		
// 	function getValue(e){
// 		console.log('hjgjh')
// 		e.preventDefault()
// 		let clearInput = e.target[0].value
// 		setInput((current) =>{
// 			return [...current, clearInput];
// 	});
// 		console.log(clearInput);
// 		e.target[0].value="";



// 		function deleteLi(i) {
// 			setInput((current)=>{
// 				return current.filter((item, index)=>{
// 					return index != i
// 				})
// 			})
// 		  }
	
// 	}


	

	

	
// 	return (
		
// 		<div>
// 			<div id="myDiv" className="header">
// 		<h1>Todo List</h1>
// 		<form onSubmit={getValue}>
// 		<input type="text" id="myInput" ></input>
// 			<button className="addBtn">Add</button>
// 			</form>
			
// 			</div>
// 			<ul>
// 				{inputVal.map((v, i) => { return(
// 					<li key={i}>
// 						{v}
// 					</li>)
// 				})}
// 			</ul>
			
			

			
// 		</div>




// 	);

	
// };

// export default Home;
import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [inputVal, setInput] = useState([]);

  function getValue(e) {
    e.preventDefault();
    let clearInput = e.target[0].value;
    setInput((current) => {
      return [...current, clearInput];
    });
    console.log(getValue);
    e.target[0].value = "";
  }
  function deleteLi(i) {
	setInput((current)=>{
		return current.filter((item, index)=>{
			return index != i
		})
	})
  }

  return (
    <div className="todoList ">
      <h1 className="title">Todo List</h1>
      <form onSubmit={getValue}>
        <label className="theLabel">
			
          <input type="text" className="actualInput bg-light" />
		  {/* <input type="text" id="myInput" placeholder="Title..."/> */}
  {/* <span onclick="newElement()" class="addBtn">Add</span> */}
        </label>
		
      </form>
      <ul>
        {inputVal.map((task, index) => {
          return (
            <li key={index}>
              {task}
			  <button className="delete-button" onClick={() => {deleteLi(index)}}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;