import React,{useState,useEffect, useContext} from 'react';
import { AppContext } from '../App';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {AxiosInstance, AxiosInstanceFormData} from "../common/AxiosInstance";
import Alert from '../components/Alert';


function AboutUs() {
  const {SERVER_URL} = useContext(AppContext);
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState(
    {
      body_tm:'',
      body_en:'',
    }
  );
  

  useEffect(()=>{
    async function fetchData(){
      try {
        const res = await AxiosInstance.get(`/statics/1`)
        if(res.status === 200){
          setData(res.data);
        }
      } catch ({response}) {
        window.confirm(response.data.message)
      }
    }
    fetchData();
  }, [])

  const handleChange = (prop) => (event) => {
    const newState = {...data, [prop]:event.target.value}
    setData(newState);
  };
  const sendData = async ()=>{
    setLoading(true);
    if(data.body_tm && data.body_en){
      try {
        const res = await AxiosInstance.post(`/statics/1`,data)
        if(res.status === 200){
          window.confirm('Ýatda saklanyldy')
        }
      } catch ({response}) {
        window.confirm(response.data.message)
      }
    }else{
      setValid(true);
    }
    setLoading(false);
  }

  const closeAlert = ()=>{
    setValid(false);
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Türkmen dilinde" 
            variant="outlined" 
            value={data.body_tm} 
            onChange={handleChange('body_tm')} 
            multiline
            rows={10}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Iňlis dilinde" 
            variant="outlined" 
            value={data.body_en} 
            onChange={handleChange('body_en')} 
            multiline
            rows={10}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={sendData} disabled={loading}>
            Ýatda saklamak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
        </Grid>
      </Grid>
      {valid ? <Alert text='Boşluklary dolduryň!!!' close={closeAlert}/> : ''}
    </div>
  );
}

export default AboutUs;
