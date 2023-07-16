import React from 'react';

const alertStyle = {
  width:'400px',
  height:'200px',
  position:'fixed',
  background:'rgb(49 141 180)',
  top:'50%',
  left:'50%',
  zIndex:'1',
  borderRadius:'10px',
  color:'white',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}
const h3Style = {
  marginTop : '0',
}
const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '10px',
  outline: 'none',
  border: 'none',
  cursor: 'pointer'
}

const buttons = {
  display:'flex',
  justifyContent: 'space-around',
  width:'50%'
}

function Alert(props) {
  return (
    <div style={alertStyle}>
      <h3 style={h3Style}>{props.text}</h3>
      <div style={buttons}>
        <button style={buttonStyle} onClick={props.close}>Ýapmak</button>
        {props.button ? <button style={buttonStyle} onClick={props.ok}>{props.button}</button> : ''}
      </div>
    </div>
  );
}

export default Alert;
