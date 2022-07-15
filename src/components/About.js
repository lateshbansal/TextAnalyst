import React, {useState} from 'react'

export default function About() {
const dark= document.getElementById('darkMode')
const darkmode=()=>{

  

   if(mystyle.color==='white'){
    setMyStyle({
        color: 'black',
        backgroundColor: 'white'
    })
    setBtnTxt("Enable dark mode");

    dark.classList.remove('btn-dark')
    dark.classList.add('btn-warning')
   }
   else
   {
    setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
    })
    dark.classList.remove('btn-warning')
    dark.classList.add('btn-dark')

    setBtnTxt("Enable light mode");
   }

    // if (${button}.hasClass('btn-primary')) {
    //     dark.classList.remove('btn-primary')
    //     dark.classList.add('btn-dark')
    //   } else {
    //     dark.classList.remove('btn-dark')
    //     dark.classList.add('btn-primary')
    //   }
}



const[mystyle, setMyStyle] =useState({
    color: 'black',
    backgroundColor: 'white'
})
const[btnTxt, setBtnTxt]=useState("Enable dark mode");
    return (
    <div>

<div className="container" style={mystyle}>
    <h1>About Us</h1>
<div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
<div className="container my-3"><button type="button" className="btn btn-warning" id="darkMode" onClick={darkmode}>{btnTxt}</button></div>

    </div>
  )
}
