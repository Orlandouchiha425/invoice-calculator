import {useState, useEffect} from "react"
export default function InvoiceCalculator(){
    const [counter, setCounter] =useState(0)
    
 const handleChange= ()=>{
    return (
    setCounter(counter )
    )
 }

const handleSubmit=()=>{
    return (
        setCounter(counter )
    )
}
    return(
    <form>
<div className="row mb-3">
  <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
  <div className="col-sm-10">
    <input type="name" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Type Clients Name" />
  </div>
</div>
<div>
    
</div>
<div className="row mb-3">
  <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Total</label>
  <div className="col-sm-10">
    <input type=" Total" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Type Clients Total" />
  </div>
</div>
<div>
    
</div>
{/* <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"> */}

{/* <button> Add </button> <input type="text"> {counter} </input> */}
<button> delete</button>
<button type="submit">Submit</button>

    </form>

    )
}