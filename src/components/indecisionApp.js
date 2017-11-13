import React from 'react';
import AddOption from './addOption.js';
import Header from './header.js';
import Action from './action.js';
import Options from './options.js';
import OptionModal from './optionModal.js';


export default class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
      this.state= {
        options: [],
        selectedOption: undefined
      };
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({ options: options }));
        }
    } catch (e) {
  
    }
    }
    componentDidUpdate (prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  
    handleDeleteOptions() {
      this.setState(() => ({options: []}));
    };

    handleClearSelectedOption () {
        this.setState(() => ({ selectedOption: undefined }));
    };
  
    handleDeleteOption(optionToRemove) {
     this.setState((prevState) => ({
       options: prevState.options.filter((option) => optionToRemove !== option)
     }));
    };
  
    handlePick() {
      const randNum = Math.floor(Math.random() * this.state.options.length);
      console.log(randNum);
      const option = this.state.options[randNum];
      this.setState(() => ({
          selectedOption: option
      })); 
    };
  
    handleAddOption (option) {
      if (!option) {
        return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > -1){
        return 'this option already exists'
      }
  
      this.setState((prevState)=>{
        return {
          options: prevState.options.concat(option)
        };
  
      });
    }
  
    render() {
  
      const title = 'Indecision';
      const subTitle = 'put your life in the hands of a computer';
  
      return (
      <div>
        <Header title= {title} subTitle = {subTitle}/>
        <div className="container">
            <Action 
            hasOptions= {this.state.options.length > 0}
            handlePick= {this.handlePick}
            />
            <div className="widget">
            <Options
            options= {this.state.options}
            handleDeleteOptions= {this.handleDeleteOptions}
            handleDeleteOption= {this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        </div>
        
        <OptionModal selectedOption= {this.state.selectedOption}
                     handleClearSelectedOption= {this.handleClearSelectedOption}
        />
      </div>
      );
    }
  }