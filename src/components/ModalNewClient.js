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
              <label for="inputName">Name</label>
              <input name = "name" type="text" className="form-control" id="inputName" placeholder="Name"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputUsername">Username</label>
              <input name="username" type="text" className="form-control" id="inputPassword4" placeholder="Username"/>
            </div>
          </div>
          <div className="form-group">
            <label for="Email">Email</label>
            <input name="email" type="email" className="form-control" id="inputEmail" placeholder="myemail@mail.com"/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCompany">Company</label>
              <input name="company" type="text" className="form-control" id="inputCompany" placeholder="My Company name"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputSite">Website</label>
              <input name="site" type="text" className="form-control" id="inputSite" placeholder="www.mycompany.com"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPhone">Phone</label>
            <input name="phone" type="text" className="form-control" id="inputPhone" placeholder="+55 09 1234-5678"/>
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