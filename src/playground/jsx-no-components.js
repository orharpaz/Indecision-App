console.log ('hi');
const appObj= {
    title: 'the indecision app',
    subtitle: 'get randomized',
    options: []
}

const onFormSubmit = (e) =>{
  e.preventDefault()
  const option = e.target.elements.option.value;
  if (option){
    appObj.options.push(option);
    renderApp();
    e.target.elements.option.value='';
  }
};

const dropData= () => {
  appObj.options= [];
  renderApp();
};

const makeADecision= () => {
  const randNum = Math.floor(Math.random() * appObj.options.length);
  console.log(randNum);
  const option = appObj.options[randNum];
  alert(option); 
};

const renderApp = () =>{
  const template= (
    <div>
      <h1>{appObj.title}</h1>
      {appObj.subtitle? <p>{appObj.subtitle} </p>:undefined}
      {(appObj.options && appObj.options.length >0) ? <p>here are your options</p>: <p>no options</p>}
      <p>{appObj.options.length}</p>
      <button disabled={appObj.options.length === 0} onClick={makeADecision}>what should i do?</button>
      <button onClick={dropData}>remove all options</button>
      <ol>
        {appObj.options.map((option) =>{
            return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit= {onFormSubmit}>
        <input type= "text" name="option"/>
        <button>add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderApp();
