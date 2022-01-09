import React ,{useState} from 'react';
import Layout from '../../Layout'
import MyButton from '../../Components/style/Button'

const About = () => {
    const [state, setState] = useState(0);
    const [count,setCount] =useState(0)
    console.log("🚀 ~ file: About.js ~ line 8 ~ About ~ count", count)

    const reset = ()=>setState(0); //method then we call it or we use inline 
    const decrement =()=>setState(state-1);
    window.setInterval (()=> setCount(count+1),3000);

    return (
        <> 
        <Layout>
        <strong>Count : {count} </strong><br />
        <strong> Button Click: {state} </strong><br />
         <MyButton reset onClick={reset}>Reset</MyButton>
         <MyButton decrement onClick={decrement}>Decrement</MyButton>
         <MyButton increment onClick={()=>setState(state+1) }>Increment</MyButton> 
        
           <h1>This is about page </h1>
        </Layout>
          
        </>
    )
}

export default About;
