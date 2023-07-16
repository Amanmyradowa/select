import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {AxiosInstance} from "../common/AxiosInstance";

const loginStyle = {
  width:'30%',
  height:'100vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',
  margin:'0 auto'
}

function Login() {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [data, setData] = useState({
    password:'',
    username:''
  });
  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };
  const sendData = async ()=>{
    setLoading(true);
    try {
      const res = await AxiosInstance.post(`/login`,data)
      if(res.status === 200){
        sessionStorage.setItem('token',res.data.token);
        window.location.href='/';
      }
    } catch ({response}) {
      setData({password:'',username:''})
      setError(true)
    }
    setLoading(false);
  }

  return (
    <div style={loginStyle}>
      <TextField 
        fullWidth   
        id="standard-basic" 
        label="Ulanyjy ady" 
        variant="outlined" 
        value={data.username} 
        onChange={handleChange('username')} 
        style={{marginBottom:'20px'}}
        autoComplete='off'
        error={error}
        onKeyPress={event => {if(event.key==='Enter') sendData()}}
      />
      <TextField 
        fullWidth   
        autoComplete='off'
        id="standard-basic" 
        label="Açar sözi" 
        variant="outlined" 
        value={data.password} 
        onChange={handleChange('password')} 
        style={{marginBottom:'20px'}}
        error={error}
        onKeyPress={event => {if(event.key==='Enter') sendData()}}
      />
      <Button variant="contained" onClick={sendData} disabled={loading}>
        Ýatda saklamak 
        <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
      </Button>
    </div>
  );
}

export default Login;
