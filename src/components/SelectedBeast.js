import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    

 

    render() {

        return (
          
              
             <Modal show= {this.props.show} >

                    <Modal.Header closeButton onhide={this.props.handleClose}>
                        <Modal.Title>{this.props.clickedBeast.title}</Modal.Title>

                    </Modal.Header>


                    <Modal.Body>
                        <Card.Img src={this.props.clickedBeast.image_url} alt='' />
                    </Modal.Body>


                    <Modal.Footer>
                        <p>{this.props.clickedBeast.description}
                        
                        </p>


                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>


           
        )
    }

}






export default SelectedBeast;