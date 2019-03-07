import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ModalNewClient extends Component {
  render(){
      return (
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <h1>New client info</h1>
            <p>Awesome!!</p>

        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary">Close</button>
            <button className="btn btn-primary">Save</button>
        </Modal.Footer>
      </Modal>

      );
  }
}
 
export default ModalNewClient;