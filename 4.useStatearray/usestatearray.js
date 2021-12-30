function MyApp(){

    const [fruits, setfruits] = React.useState(['apple','mango','orange','papaya','grapes'])

    let removefruits=()=>{
        let indexOffruits = fruits.indexOf('papaya')
        if(indexOffruits>=0){
            fruits.splice(indexOffruits,1)
        
        setfruits(
            [...fruits]
        )
        }

    }
    return <div>
    {
        fruits.map((fruit,idx)=>{
            return <p key={idx+fruit}>{fruit}</p>
        })
    }
    <button onClick={removefruits}>Remove</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById("container"))