import React ,{ useState, useEffect } from 'react';
import Layout from '../../Layout'
import MyButton from '../../Components/style/Button'

const About = () => {
    const [state, setState] = useState(0);
    const [count,setCount] =useState(0)

    const reset = ()=>setState(0); //method then we call it or we use inline 
    const decrement =()=>setState(state-1);

    useEffect(()=> {
        setInterval (()=> {
            setCount(prev => prev+1);
        },1000);
    }, [])

    return (
        <Layout>

        <strong>Auto Count : {count} </strong><br />

<hr />

        <strong> Click Count: {state} </strong><br />
         <MyButton reset onClick={reset}>Reset</MyButton>
         <MyButton decrement onClick={decrement} disabled={!state} >Decrement</MyButton>
         <MyButton increment onClick={()=>setState(state+1) }>Increment</MyButton> 
        
         <h1>This is about page </h1>
        </Layout>
          
    )
}

export default About;
