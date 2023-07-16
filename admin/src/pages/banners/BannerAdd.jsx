import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { AxiosInstance, AxiosInstanceFormData } from '../../common/AxiosInstance';
import Alert from '../../components/Alert';



function AddBrand() {
  const [loading,setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [showImage1,setShowImage1] = useState([]);
  const [showImage2,setShowImage2] = useState([]);
  const [imageSource1,setImageSource1] = useState([]);
  const [imageSource2,setImageSource2] = useState([]);
  const [data, setData] = useState({
    name:'',
    link:'',
  });

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const sendData = async ()=>{
    setLoading(true);
    
    if(data.name){
      try {
        const res = await AxiosInstance.post('/brands',data);
        if(res.status === 201){
          window.location.href = '/brands'
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

  //For image
  const handleImages1 = (event) => {
    const images = [];
    const showImages2 = [];
    if (event.target.files && event.target.files[0]) {
      images.push({
        url: URL.createObjectURL(event.target.files[0])
      })
      showImages2.push(event.target.files[0])
    }
    setImageSource1(images);
    setShowImage1(showImages2);
  }
  const handleImages2 = (event) => {
    const images = [];
    const showImages2 = [];
    if (event.target.files && event.target.files[0]) {
      images.push({
        url: URL.createObjectURL(event.target.files[0])
      })
      showImages2.push(event.target.files[0])
    }
    setImageSource2(images);
    setShowImage2(showImages2);
  }

  return (
    <div>
      <Grid container columnSpacing={10} rowSpacing={2}>
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Banner ady" 
            variant="standard" 
            value={data.name} 
            autoComplete="off"
            onChange={handleChange('name')}
          />
        </Grid> 
        <Grid item xs={6}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Banner linki" 
            variant="standard" 
            value={data.link} 
            autoComplete="off"
            onChange={handleChange('link')}
          />
        </Grid> 
        <Grid item xs={12}></Grid>
        <Grid item xs={6}>Website suraty</Grid>
        <Grid item xs={6}>Application suraty</Grid>
        <Grid item xs={6} style={{}}>
          <input 
            type="file" 
            accept='image/*'
            multiple
            id="icon-button-photo"
            onChange={handleImages1}
            hidden
          />

          <label htmlFor="icon-button-photo">
            {
              !imageSource1.length ? 
                <Button color="primary" component="span">
                  <svg width="100" height="100" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00153 4.5C6.00153 5.32843 5.32995 6 4.50153 6C3.6731 6 3.00153 5.32843 3.00153 4.5C3.00153 3.67157 3.6731 3 4.50153 3C5.32995 3 6.00153 3.67157 6.00153 4.5Z" fill="black"/>
                    <path d="M2.00153 0C0.896956 0 0.00152588 0.89543 0.00152588 2V12C0.00152588 13.1046 0.896956 14 2.00153 14H14.0015C15.1061 14 16.0015 13.1046 16.0015 12V2C16.0015 0.895431 15.1061 0 14.0015 0H2.00153ZM14.0015 1C14.5538 1 15.0015 1.44772 15.0015 2V8.50001L11.2251 6.5528C11.0326 6.45655 10.8002 6.49428 10.648 6.64646L6.93782 10.3566L4.27888 8.58399C4.08056 8.45178 3.8165 8.47793 3.64797 8.64646L1.00153 11V2C1.00153 1.44772 1.44924 1 2.00153 1H14.0015Z" fill="black"/>
                  </svg>
                </Button>
                :
                <img style={{width:'80%', marginRight:'10px'}} src={ imageSource1[0] ? imageSource1[0].url : ''}/>
            }
          </label>
          
        </Grid>
        <Grid item xs={6} style={{}}>
          <input 
            type="file" 
            accept='image/*'
            multiple
            id="icon-button-photo2"
            onChange={handleImages2}
            hidden
          />

          <label htmlFor="icon-button-photo2">
            {
              !imageSource2.length ?
              <Button  color="primary" component="span">
                <svg width="100" height="100" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00153 4.5C6.00153 5.32843 5.32995 6 4.50153 6C3.6731 6 3.00153 5.32843 3.00153 4.5C3.00153 3.67157 3.6731 3 4.50153 3C5.32995 3 6.00153 3.67157 6.00153 4.5Z" fill="black"/>
                  <path d="M2.00153 0C0.896956 0 0.00152588 0.89543 0.00152588 2V12C0.00152588 13.1046 0.896956 14 2.00153 14H14.0015C15.1061 14 16.0015 13.1046 16.0015 12V2C16.0015 0.895431 15.1061 0 14.0015 0H2.00153ZM14.0015 1C14.5538 1 15.0015 1.44772 15.0015 2V8.50001L11.2251 6.5528C11.0326 6.45655 10.8002 6.49428 10.648 6.64646L6.93782 10.3566L4.27888 8.58399C4.08056 8.45178 3.8165 8.47793 3.64797 8.64646L1.00153 11V2C1.00153 1.44772 1.44924 1 2.00153 1H14.0015Z" fill="black"/>
                </svg>
              </Button>
              : 
              <img style={{width:'50%', marginRight:'10px'}} src={imageSource2[0] ? imageSource2[0].url : ''}/>
            }
          </label>
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
