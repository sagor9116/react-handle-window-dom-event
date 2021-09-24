import React, { useState,useEffect } from 'react';



const Filenamer = () => {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState(false);

   useEffect(()=> {
     const handleWindowClick = () => setAlert(false);
     if(alert) {
       window.addEventListener('click',handleWindowClick)
     } else {
       window.removeEventListener('click',handleWindowClick)
     }

     return () => window.removeEventListener('click',handleWindowClick);

 }, [alert, setAlert])

  
  function handleInputChange(event){
  const e = event.target.value;
  setName(e);
}

function alertValidation(event) {
  if(/\*/.test(name)) {
    event.preventDefault();
    setAlert(true);
    return;
  }
  setAlert(false);
}

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js </h2>
      </div>
      <form action="">
        <label>
          <p>Name: </p>
          <input
            autoComplete="off"
            value ={name}
            onChange ={handleInputChange}
            />
        </label>
        <div className="information-wrapper">
          <div className="information">
            <button onClick={()=> setAlert(true)} type="button">more information</button>
            {alert && 
              <div className="popup">
                <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
                <br />
                <span role="img" aria-label="not allowed">⛔️</span> Asterix (*) not allowed.
              </div>
            }
          </div>
        </div>
        <div>
          <button onClick={alertValidation}>save</button>
        </div>
      </form>
    </div>
  )
}

export default Filenamer;
