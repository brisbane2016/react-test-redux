import React from 'react';
import SingleOption from "../components/SingleOption";

class Options extends React.Component{


    render(){
        return (

            <div> 
                {
                    this.props.options.length >= 0 &&
                    this.props.options.map((option,index) => (
                        <SingleOption 
                            key={index} 
                            handleSingleRemove={this.props.handleSingleRemove}
                            option={option} 
                        />
                        )
                    )
                }
            </div>
        );

    }
}


export default Options;