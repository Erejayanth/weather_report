import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react'

function App() {
  const [fromdate,setFromDate]=useState("");
  const [toDate,setToDate]=useState("");
  const [submit,setSUbmit]=useState(false);
  const handleFromDate =(event)=>{
    debugger;
    setFromDate(event.target.value);
  }
  const handleToDate=(event)=>{
    setToDate(event.target.value)
  }
  const hancleSubmitCLick =()=> {
    if(fromdate !="" && toDate!=""){
      setSUbmit(true);
    }
    else{
      alert("Please Give from date and to date"); 
    }
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{display:"flex"}}>
      <label>From</label>
      <div style={{margin:"0px 10px 0 10px"}}>
      <input type='text' value={fromdate} onChange={handleFromDate} ></input></div>
      <div style={{margin:"0px 10px 0 10px"}}>
      <label>To</label></div>
      <div style={{margin:"0px 10px 0 10px"}}>
      <input type='text' value={toDate} onChange={handleToDate}></input></div>
      <div style={{margin:"0px 10px 0 10px"}}>
      <button style={{background:"blue",color:"white"}} onClick={hancleSubmitCLick}>Submitt</button></div></div>
      {submit && 
     <div style={{margin:"0px 10px -20px 150px",color:"grey"}}><h1>FORECAST</h1>
      <div style={{display:"flex"}}>
        <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
        <div style={{background:"red",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >SUN</div>
         <div style={{fontSize:"35px",textAlign:"center"}}>68</div>
         <div><img style={{width:"50px",height:"80px"}} src="/wind.jpg" alt="My Image" /></div>
         <div style={{textAlign:"center"}}><b>WINDY</b></div></div>
        <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
         <div style={{background:"#34cceb",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >MON</div>
         <div style={{fontSize:"35px"}}>74</div>
         <div><img style={{width:"50px",height:"80px"}} src="/sun.jpg" alt="My Image" /></div>
         <div style={{textAlign:"center"}}><b>SUNNY</b></div>
        </div>
        <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
          <div style={{background:"#34cceb",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >TUE</div>
          <div style={{fontSize:"35px",textAlign:"center"}}>83</div>
          <div><img style={{width:"50px",height:"80px"}} src="/thunder.jpg" alt="My Image" /></div>
          <div style={{fontSize:"10px",textAlign:"center"}}>Thunderstrom</div>
        </div>
        <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
          <div style={{background:"#34cceb",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >WED</div>
          <div style={{fontSize:"35px",textAlign:"center"}}>75</div>
          <div><img style={{width:"50px",height:"80px"}} src="/cloud.jpg" alt="My Image" /></div>
          <div style={{textAlign:"center"}}>MOSTLY<br></br> CLOUDY</div>
          </div>
        <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
          <div style={{background:"#34cceb",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >THU</div>
          <div style={{fontSize:"35px",textAlign:"center"}}>82</div>
          <div><img style={{width:"50px",height:"80px"}} src="/partlycloud.jpg" alt="My Image" /></div>
          <div style={{textAlign:"center"}}>PARTLY <br></br>CLOUDY</div></div>
       <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
       <div style={{background:"#34cceb",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >FRI</div>
        <div style={{fontSize:"35px",textAlign:"center"}}>81</div>
        <div><img style={{width:"50px",height:"80px"}} src="/rain.jpg" alt="My Image" /></div>
        <div style={{textAlign:"center"}}><b>RAIN</b></div></div>
       <div style={{border: "2px solid antiquewhite",borderRadius:"5px"}}>
         <div style={{background:"red",width:"60px",height:"25px",borderRadius:"5px",color:"white",textAlign:"center"}} >SAT</div>
        <div style={{fontSize:"35px",textAlign:"center"}}>90</div>
        <div><img style={{width:"50px",height:"80px"}} src="/sun.jpg" alt="My Image" /></div>
        <div style={{textAlign:"center"}}><b>SUNNY</b></div></div>
     </div></div>
     }
    </div>
  );
}

export default App;
