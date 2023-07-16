import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AxiosInstance } from '../common/AxiosInstance';

function Profile() {
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState({
    username:'',
    password:'',
    newPassword:'',
    newPasswordConfirm:'',
  });

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await AxiosInstance.get('/get-me');
        if(res.status === 200){
          setData({ ...data, 'username': res.data.username })
        }
      } catch ({response}) {
        window.confirm(response.data.message);
      }
    }
    fetchData();
  },[])

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const sendData = async ()=>{
    setLoading(true);
    if(data.username && data.password && data.newPassword && data.newPasswordConfirm){
      if(data.newPassword === data.newPasswordConfirm){
        try {
          const res = await AxiosInstance.post('/edit',data);
          if(res.status === 200){
            window.confirm('Ýatda saklandy');
          }
        } catch ({response}) {
          window.confirm(response.data.message);
        }
      }else{
        window.confirm('Täze açar sözlerini meňzeş giriziň')
      }
    }
    setLoading(false);
  }

  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Login" 
            variant="standard" 
            value={data.username} 
            onChange={handleChange('username')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Açar sözi" 
            variant="standard" 
            value={data.password} 
            onChange={handleChange('password')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Täze açar sözi" 
            variant="standard" 
            value={data.newPassword} 
            onChange={handleChange('newPassword')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Täze Açar sözüni gaýtadan" 
            variant="standard" 
            value={data.newPasswordConfirm} 
            onChange={handleChange('newPasswordConfirm')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={sendData} disabled={loading}>
            Ýatda saklamak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
