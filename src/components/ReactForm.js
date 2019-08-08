import React from 'react';
import Action from '../components/Action';
import Header from '../components/Header';
import Options from '../components/Options';
import AddOption from '../components/AddOption';
import OptionModal from '../components/OptionModal';

import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';
import { setListAction,addListAction, removeListAction } from '../actions/listAction';
import configureStore from '../store';

const xstore = configureStore();

class ReactForm extends React.Component {

    state = {
        options: [],
        selectOption: undefined
    }

    handleAddOption = (option) => {



        if (option !== "") {


            this.props.addListAction(option);

        }
    };
    handleSingleRemove = (id) => {
        if (id !== "") {


            this.props.removeListAction(id);

            console.log(id);
        }

    }

    handleRemoveAll = () => {
        this.setState(() => (
            {
                options: []
            }
        ));
    }

    handleWhatIdo = () => {

        let number = Math.floor(Math.random() * Math.floor(this.state.options.length));
        this.setState(() => ({
            selectOption: this.state.options[number]
        }));
    }
    handleModalClose = () => {

        this.setState(() => ({
            selectOption: undefined
        }));
    }
    simpleAction = (event) => {
        this.props.simpleAction();
        console.log(xstore.getState());

    }
    listAuciton = (list) => {
        console.log(this.state.options);
        this.props.setListAction(this.state.options);
        console.log(xstore.getState());
    }

   
    render() {

        return (
            <div>
                <Header />
                <Action
                    handleRemoveAll={this.handleRemoveAll}
                    handleWhatIdo={this.handleWhatIdo}
                    options={this.state.options}
                />
                <Options

                    options={this.props.list}
                    handleSingleRemove={this.handleSingleRemove}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}

                />

                <OptionModal

                    option={this.state.selectOption}
                    ModalClose={this.handleModalClose}

                />
                <button onClick={this.simpleAction}>Test redux action</button>
           
                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>

            </div>


        );


    }
}


// take state to this page
const mapStateToProps = state => ({
    list: state.listReducer
})

// create local props function which can execute and dispatch redux action
const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    setListAction: (list) => dispatch(setListAction(list)),
    addListAction: (list) => dispatch(addListAction(list)),
    removeListAction: (id)=>dispatch(removeListAction(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReactForm);