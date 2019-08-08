import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
class OptionModal extends React.Component{
   
    render(){
     
        return (

                    <div>

                    <Modal
                        isOpen={!!this.props.option}
                        
                        onRequestClose={this.props.ModalClose}
                 
                        contentLabel="Example Modal"
                    >
                        <p>
                            {this.props.option}
                        </p>

                </Modal>

                    </div>



        );
    }
}


export default OptionModal;