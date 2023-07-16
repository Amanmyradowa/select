import React,{useState, useEffect, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '../../components/Alert';
import { AxiosInstance, AxiosInstanceFormData } from '../../common/AxiosInstance';
import { AppContext } from '../../App';



function SubcategoriesAdd() {
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    name_tm: '',
    name_ru: '',
  });

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const sendData = async ()=>{
    setLoading(true);
    if(data.name_ru && data.name_tm ){
      try {
        const res = await AxiosInstance.patch(`categories/${data.category_id}`,data);
        if(res.status === 200){
          window.location.href = '/categories';
        }
      } catch ({response}) {
        window.confirm(response.data.message);
      }
    }else{
      setValid(true)
    }
    
    setLoading(false);
  }

  const closeAlert = ()=>{
    setValid(false);
  }

  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Turkmen sub-kategory ady" 
            variant="standard" 
            value={data.name_tm}
            autoComplete='off'
            onChange={handleChange('name_tm')}
          />
        </Grid> 
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Rus sub-kategory ady" 
            variant="standard" 
            value={data.name_ru} 
            autoComplete='off'
            onChange={handleChange('name_ru')}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={sendData} disabled={loading}>
            Ýatda saklamak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
        </Grid>

        {valid ? <Alert text='Boşluklary dolduryň!!!' close={closeAlert}/> : ''}
      </Grid>
    </div>
  );
}

export default SubcategoriesAdd;
