import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageVote: 0
        }

    }
    votes = ()=> {
        this.setState({
            imageVote:this.state.imageVote +1
        })
    }
    
    
    /* bootstrap way */
    render() {
        return (
            <div className="horn">

             <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        ❤️  = {this.state.imageVote}
                        </Card.Text>
                        <Button onClick={this.votes} variant="primary">Click to vote your favorite</Button>
                    </Card.Body>
                </Card>



            </div>

)
}

}
export default HornedBeast;
//  { <h2>{this.props.title}</h2>
//  <img onClick={this.votes}
//      src={this.props.imageUrl} alt="hornedBeasts" title="horned"/>
//  <p>
//      {this.props.description}
//  </p>
//  <p>Number Of Votes = {this.state.imageVote}</p> }
