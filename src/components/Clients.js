import React, { Component } from 'react';

class Clients extends Component {

    constructor(props){
        super(props)
        this.state = {users:this.props.users,isLoading:this.props.isLoading};
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>{
                if(this.state.users.length===0&&this.state.isLoading){
                    this.props.setUsers({users,isLoading:false});
                }
            })//this.setState({users})
            .catch(e=>console.log(e));
    }

    usersView(){
        const {users,isLoading}=this.props;
        if (users.length>0){//case 'user!=null'
            return(
                <div className='container border rounded mt-5'>
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
                                <th scope="col"></th>
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
                                    <td>
                                        <button onClick = {()=>this.props.del(user.id)} type="button" className="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            );
        }else if(isLoading){    
                return(      
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                );
            }else{

                return(

                    <div className= 'container mt-5'>
                        <div class="alert alert-danger font-weight-bold" role="alert">
                            No records found! :(
                        </div>
                  </div>

                );

            }
        }
    
    

    render(){
        return this.usersView();
    }
}



export default Clients;