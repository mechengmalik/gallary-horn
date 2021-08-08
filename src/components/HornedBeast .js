import React from 'react';

class HornedBeast  extends React.Component{
    render(){
        return(
            <div className="horn">
                <h2>{this.props.title}</h2>
                <img
               src={this.props.imageUrl} alt="hornedBeasts" title="horned"
              
               />
               <p>
               {this.props.description}
               </p>

                

            </div>

        )
    }

}
export default HornedBeast;