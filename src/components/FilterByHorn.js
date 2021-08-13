
import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'


class FilterByHorn extends React.Component {
    chosenHornNum=(event)=>{
        this.props.selectHornNum(event);
    }


    render() {
        return (
            <div>
                <Form onClick={this.props.filterHornNum}>
                <FloatingLabel controlId="floatingSelect" label="Filter by Number of Horn">
                    <Form.Select aria-label="Floating label select example" onChange={this.chosenHornNum}>
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Imaginary Horn</option>
                    </Form.Select>
                </FloatingLabel>
                </Form>
            </div>


        )
    }
}

export default FilterByHorn;