import React from 'react';
import Action from '../components/Action';
import Header from '../components/Header';
import Options from '../components/Options';
import AddOption from '../components/AddOption';
import OptionModal from '../components/OptionModal';

class ReactForm extends React.Component {

    state = {
        options: ["dog", "cat"],
        selectOption:undefined
    }

    handleAddOption = (option) => {


      
        if (option !== "") {


            this.setState((prevState) => ({

                options: prevState.options.concat(option)

            }));

        }
    };
    handleSingleRemove= (optionTo)=>{
        if (optionTo !== "") {


            this.setState((prevState) => ({
                options: prevState.options.filter((option) => optionTo !== option)
              }));


        }

    }

    handleRemoveAll= () => {
        this.setState(()=>(
            {
                options: []
            }
        ));
    }

    handleWhatIdo = () => {
        
        let number = Math.floor(Math.random() * Math.floor(this.state.options.length));
        this.setState(()=>({
            selectOption:this.state.options[number]
        }));
    }
    handleModalClose = () =>{

        this.setState(()=>({
            selectOption:undefined
        }));
    }
    render() {
        console.log(this.state.options);
        return (
            <div>
                <Header />
                <Action 
                    handleRemoveAll = {this.handleRemoveAll}
                    handleWhatIdo = {this.handleWhatIdo}
                    options= {this.state.options}
                />
                <Options  
                   
                    options= {this.state.options}
                    handleSingleRemove= {this.handleSingleRemove}
                />
                <AddOption 
                     handleAddOption = {this.handleAddOption}
                
                />

                <OptionModal 

                    option = {this.state.selectOption}
                    ModalClose = {this.handleModalClose}

                />


            </div>


        );


    }
}



export default ReactForm;