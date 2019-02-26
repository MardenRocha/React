import React, { Component } from 'react';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = { users:null, }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>this.setState({users}))
            .catch(e=>console.log(e));
    }

    render() { 

        const{users} = this.state;
        return ( 
            <div className='container border rounded mt-5'>
                {users?//case 'user!=null'
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
                        </tr>
                    </thead>
                    <tbody>{
                        users.map(user=>
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
                ://case 'user=null'
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>
                }
            </div>
         );
    }
}
 
export default Clients;