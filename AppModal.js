import React, { Component } from 'react';
import {Modal ,Button} from 'react-bootstrap'

export class AppModal extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               List Of Users
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
             
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button  onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}