function MyApp(){

    const [ employee, setemployee] = React.useState({
        empID:39,
        empName:"John",
        empAge:22,
        empSalary:10000
    })

    let updateEmpDetails=()=>{
        setemployee({
            ...employee, //spread operator is used 
            empName:"Lavanya",
            empSalary:"20000"
          
        })
    }
    return <div>
        <p>EmpID:{employee.empID}</p>
        <h4>EmpName:{employee.empName}</h4>
        <p>EmpAge:{employee.empAge}</p>
        <h4>EmpSalary:{employee.empSalary}</h4>
        <button onClick={updateEmpDetails}>Update Details</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById("container"))