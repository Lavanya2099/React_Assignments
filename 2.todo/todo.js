function MyTodo() {
    const [text, settext] = React.useState(['Hi,Welcome To React JS'])
    const [val, setval] = React.useState("")
    
    let submitvalue = (event) => {
        setval(event.target.value)
    }
   
    let submit = (e) => {
        if (e!= "") {
            text.push(e)
            settext([...text])
            setval("")
        }
    }


    return <div>
    <h1>TODO LIST</h1>
 
    <div class="input-group mb-3">
     <input type="text" value={val} onChange={(event)=>{submitvalue(event)}} />
     <br/>
     <br/>
     <button onClick={()=>{submit(val)}}>Submit</button>
    <br/>
    
   </div>
            {
                text.map((text,idx)=>{
                    return <p key={idx}>{text}</p>
                })
            }
           
     
 
    </div>

}

ReactDOM.render(<MyTodo />, document.getElementById('container'))