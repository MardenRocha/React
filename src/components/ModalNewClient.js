import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ModalNewClient extends Component {
  render(){
      return (
        <Modal
        {...this.props}
        size="lg"
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            New client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form id='form-new-client'>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
        </form>

        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" onClick={()=>this.props.onHide()}>Close</button>
            <button type='submit' className="btn btn-primary" form='form-new-client'>Save</button>
        </Modal.Footer>
      </Modal>

      );
  }
}
 
export default ModalNewClient;