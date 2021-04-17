 import React,{Fragment} from 'react'

const Listandkeys = (props) => {
    let {emp_id,emp_name,emp_photo,emp_salary,emp_designation} = props.emp;
    return (
        <Fragment>
            <tr>
                <td>
                    <img src  = {emp_photo} alt={emp_salary}/>
                </td>
                <td>{emp_id}</td>
                <td>{emp_name}</td>
                <td>{emp_salary}</td>
                <td>{emp_designation}</td>
            </tr>
        </Fragment>
    );
};


export default Listandkeys;
