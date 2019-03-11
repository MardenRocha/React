import React, { Component } from "react";
import ModalNewClient from "./ModalNewClient";
import ModalEditClient from "./ModalEditClient";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = { users: this.props.users, isLoading: this.props.isLoading };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        if (this.state.users.length === 0 && this.state.isLoading) {
          this.props.setUsers({ users, isLoading: false });
        }
      }) //this.setState({users})
      .catch(e => console.log(e));
  }

  usersView() {
    const { users, isLoading } = this.props;
    if (users.length > 0) {
      //case 'user!=null'
      return (
        <div className="container border rounded my-4">
          <div>
            <button
              type="button"
              onClick={() => this.props.setModal()}
              className="btn btn-success font-weight-bold my-2"
            >
              Add Client{" "}
              <span className="badge badge-light font-weight-bold">+</span>
              <span className="sr-only font-weight-bold">Add Client</span>
            </button>

            <ModalNewClient
              show={this.props.modalShow}
              onHide={() => this.props.setModal()}
              handleSubmitClient={this.props.handleSubmitClient}
              onBlurField={this.props.onBlurField}
            />
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Company</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.props.setModalEdit()}
                    >
                      Edit
                    </button>
                    <ModalEditClient
                      show={this.props.modalEdit}
                      onHide={() => this.props.setModalEdit()}
                      handleEditClient={() => this.props.handleEditClient}
                      onBlurField={() => this.props.onBlurField}
                      users={this.props.users}
                      saveId={() => this.props.saveId(user.id)}
                      newUser={this.props.newUser}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.del(user.id)}
                      type="button"
                      className="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <button
            type="button"
            onClick={this.openModal}
            className="btn btn-success font-weight-bold"
          >
            Add Client{" "}
            <span className="badge badge-light font-weight-bold">+</span>
            <span className="sr-only font-weight-bold">Add Client</span>
          </button>
          <div class="alert alert-danger font-weight-bold" role="alert">
            No records found! :(
          </div>
        </div>
      );
    }
  }

  render() {
    return this.usersView();
  }
}

export default Clients;
