import React from 'react';

const childcomponent = props => {
    return(
        <section>
            <div>
                <p>{props.users.username || props.username}</p>
                <p>{props.company}</p>
                <p>{props.children}</p>
            </div>
        </section>
    );
    
};

childcomponent.defaultprops = {
    username: "manu", 
    company :"testyanthra",
};

export default childcomponent;













// const childcomponent = (props => {
//     render(){
//     let {username , age , company , salary} = props.users;
//     return (
//         <div>
//             <h1>i am child {username}</h1>
//             <p> {age}</p>
//             <p> i work for {company}</p>
//             <p> i am getting{salary}</p>
//         </div>
//     )
  
// }
// }
// export default childcomponent;