// import React , {component} from "react";
// import childcomponent from "./componets/childcomponent";
// // import childwithclassbased from "./componets/childwithclassbased";

// class App extends component{
//     render() {
//         //  return (
//         //      <div>
//         //      <childcomponent  users={{
//         //       username:"shashi",
//         //       company : "testyanthra",
//         //      }}>
//         //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         //             Accusantium sint ducimus molestias dolorum, aliquam velit cum obcaecati quidem eum ratione officia praesentium?
//         //              Iusto molestias quo nihil sapiente doloribus eius debitis.</p> </childcomponent>
//         //      <childcomponent  users={{
//         //       username:"mani",
//         //       company : "capgemini",
//         //      }}/>
//         //      <childcomponent  users={{
//         //       username:"manu",
//         //       company : "jspiders",
//         //      }}/>

//         //      <childcomponent  users={{
//         //       username:"madhu",
//         //       company : "jspiders",
//         //      }}/>
//         //      <childcomponent  users={{
//         //       username:"girish",
//         //       company : "j\q",
//         //      }}/>  
//         //      <hr/>
//         //   </div>
//         //  )

//       return(
//           <div className="flexbox">
//               <childcomponent users = {{
//                   username : "shashi",
//                   company : "qspiders"
//               }}>
                
//                 <h1>jspiders</h1>
//                 <p>learning reactjs</p>
//                 <button>join</button>
//               </childcomponent>
//               <hr/>
//           </div>
//       )


//     }
// }
// export default App;

import React , {Component , Fragment} from "react";
import faker from "faker/locale/en_IND";
import Listandkeys from "./listandkeys"

class App extends Component {
  _state = {
        employees: [{
            emp_id: 1,
            emp_name: "manu",
            emp_photo: faker.image.avatar(),
            emp_sal: 20000
        },
        {
            emp_id: 2,
            emp_name: "shashi",
            emp_photo: faker.image.avatar(),
            emp_sal: 90000
        },
        {
            emp_id: 3,
            emp_name: "mani",
            emp_photo: faker.image.avatar(),
            emp_sal: 80000
        }
        ],
    };
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }

render(){
    return(
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>photo</th>
                        <th> id</th>
                        <th> name</th>
                        <th>salary</th>
                        <th>designation</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(emp =>(
                        <Listandkeys emp={emp}/>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
  };
};
 
export default App;