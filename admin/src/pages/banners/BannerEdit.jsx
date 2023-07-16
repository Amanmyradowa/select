import React,{useState, useEffect,useContext} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AxiosInstance } from '../../common/AxiosInstance';
import Alert from '../../components/Alert';



function AddBrand() {
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    name:'',
  });

  useEffect(()=>{
    const fetchData = async ()=>{
      const id = window.location.search.split('=')[1];
      try {
        const res = await AxiosInstance.get('/brands/'+id)
        console.log(res);
        if(res.status === 200){
          setData(res.data);
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
    
    if(data.name){
      try {
        const res = await AxiosInstance.patch('/brands/'+data.brand_id,data);
        if(res.status === 200){
          window.location.href = '/brands';
        }
      } catch ({response}) {
        window.confirm(response.data.message);
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
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Brend ady" 
            variant="standard" 
            value={data.name} 
            autoComplete="off"
            onChange={handleChange('name')}
          />
        </Grid> 
        
        <Grid item xs={12}>
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

export default AddBrand;
