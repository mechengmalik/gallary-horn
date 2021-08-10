import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { Card } from 'react-bootstrap';

class SelectedBeast extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }


    // handleShow = () => {
    //     this.setState({ show: true })
    // }

    // handleClose = ()=>{
    //     this.setState({ show: false})

    // }
    

    render() {

        return (
            <div>
              
             <Modal show= {this.props.show} onHide={this.props.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>

                    </Modal.Header>


                    <Modal.Body>
                        <img src={this.props.imageUrl} alt='' />
                    </Modal.Body>


                    <Modal.Footer>
                        <Modal.Text>{this.props.description}
                        </Modal.Text>


                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>


            </div>
        )
    }

}






export default SelectedBeast;