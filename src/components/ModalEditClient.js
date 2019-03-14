import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class ModalEditClient extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props.newUser.id };
  }

  componentWillReceiveProps(props) {
    if (props.newUser.id !== this.state.id) {
      props.refreshModal();
    }
  }

  render() {
    const { show, onHide } = this.props;

    const userEdited = () => {
      if (!this.props.newUser.id) {
        return {
          name: "",
          email: "",
          username: "",
          phone: "",
          website: "",
          company: { name: "" }
        };
      } else {
        return this.props.users.find(
          element => this.props.newUser.id === element.id
        );
      }
    };

    return (
      <Modal
        {...{ show, onHide }}
        size="lg"
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="form-new-client">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputName">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                  onBlur={this.props.onBlurField}
                  defaultValue={userEdited().name}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputUsername">Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Username"
                  onBlur={this.props.onBlurField}
                  defaultValue={userEdited().username}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="myemail@mail.com"
                onBlur={this.props.onBlurField}
                defaultValue={userEdited().email}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCompany">Company</label>
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  id="inputCompany"
                  placeholder="My Company name"
                  onBlur={this.props.onBlurField}
                  defaultValue={userEdited().company.name}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputSite">Website</label>
                <input
                  name="website"
                  type="text"
                  className="form-control"
                  id="inputSite"
                  placeholder="www.mycompany.com"
                  onBlur={this.props.onBlurField}
                  defaultValue={userEdited().website}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone</label>
              <input
                name="phone"
                type="text"
                className="form-control"
                id="inputPhone"
                placeholder="+55 09 1234-5678"
                onBlur={this.props.onBlurField}
                defaultValue={userEdited().phone}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onHide()}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            form="form-new-client"
            onClick={this.props.handleEditClient}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalEditClient;
