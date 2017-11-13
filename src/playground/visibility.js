class Visability extends React.Component {
    constructor(props) {
        super(props);
        this.setVisability = this.setVisability.bind(this);
        this.state= {
            visibility : false
        }
    }

    setVisability() {
      this.setState((prevState)=>{
          return {
            visibility : !prevState.visibility
          }
      } )  
  
    }

    render(){
        return (
            <div>
            <h1>visibilty toggle </h1>
            <button onClick={this.setVisability}>
            {this.state.visibility ? 'hide details': 'show details'}
            </button>
            {this.state.visibility &&(
                <div>
                <p> Hey, these are some details you can see </p>
                </div>
            )}
        </div> 
        )
    }

} 

ReactDOM.render(<Visability />, document.getElementById('app'));


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () =>{
//     const jsx = (
//         <div>
//             <h1>visibilty toggle </h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'hide details': 'show details'}
//             </button>
//             {visibility &&(
//                 <div>
//                 <p> Hey, these are some details you can see </p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();