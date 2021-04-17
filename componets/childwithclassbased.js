import React, { Component } from 'react'

class childwithclassbased extends Component{
    render(){
        let {username,age,company,salary,designation } = this.props.users;
        return(
            <div>
                <div>
                    <h1> i am {username}</h1>
                    <p> {age}</p>
                    <p> i work for {company}</p>
                    <p> i getting {salary}</p>
                    <p> {designation}</p>
                </div>
            </div>
        )
    }
}
 export default childwithclassbased;