import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '../components/Alert';
import {AxiosInstance} from "../common/AxiosInstance";

function Main() {
  const [loading,setLoading] = useState(false);
  const [showImages,setShowImages] = useState([]);
  const [imageSources,setImageSources] = useState([]);
  const [valid, setValid] = useState(false);
  const [valid2, setValid2] = useState(false);
  const [deleteImageId, setDeleteImageId] = useState(false);
  const [data, setData] = useState({
    text_big_tm: '',
    text_big_ru: '',
    text_big_en: '',
    text_small_tm: '',
    text_small_ru: '',
    text_small_en: '',
  });

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await AxiosInstance.get(`/main`)
        if(res.status === 200){
          setData(res.data);
        }
      } catch ({response}) {
        window.confirm(response.data.message)
      }
    }
    fetchData();
  },[])

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const handleImages = (event) => {
    const images = [...imageSources];
    const showImages2 = [...showImages];
    if (event.target.files && event.target.files[0]) {
      for(let i = 0; i<event.target.files.length; i++){
        images.push({
          url: URL.createObjectURL(event.target.files[i])
        })
        showImages2.push(event.target.files[i])
      }
    }
    setImageSources(images);
    setShowImages(showImages2);
  }

  const deleteImage = ()=>{
    setValid2(false);
    
    const images = [...showImages];
    const sources = [...imageSources]
    images.splice(deleteImageId,1)
    sources.splice(deleteImageId,1)
    setShowImages(images);
    setImageSources(sources);
  }
  const openDeleteImage = (id)=>{
    setValid2(true);
    console.log(id)
    setDeleteImageId(id);
  }

  const sendData = async ()=>{
    console.log(data);

    // setLoading(true);
    // try {
    //   const res = await AxiosInstance.patch(`/main`,data)
    //   if(res.status === 200){
    //     window.confirm('Ýatda saklandy');
    //   }
    // } catch ({response}) {
    //   window.confirm(response.data.message)
    // }
    // setLoading(false);
  }
  
  const closeAlert = ()=>{
    setValid(false);
  }
  const closeAlert2 = ()=>{
    setValid2(false);
  }



  // InputLabelProps={{ required: false }}  ==> required goyanda label+ * bolyar shony ayyrmak we shol star-a asterisk diyilyar;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}><h2 style={{marginBottom:0}}>Uly hatlary</h2></Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Türkmen dilinde" 
            variant="standard" 
            value={data.text_tm} 
            onChange={handleChange('text_big_tm')} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            id="standard-basic" 
            label="Rus dilinde" 
            variant="standard" 
            value={data.text_ru} 
            onChange={handleChange('text_big_ru')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            id="standard-basic" 
            label="Iňlis dilinde" 
            variant="standard" 
            value={data.text_en} 
            onChange={handleChange('text_big_en')}/>
        </Grid>

        <Grid item xs={12}><h2 style={{marginBottom:0}}>Kiçi hatlary</h2></Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth   
            id="standard-basic" 
            label="Türkmen dilinde" 
            variant="standard" 
            value={data.text_tm} 
            onChange={handleChange('text_small_tm')} 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            id="standard-basic" 
            label="Rus dilinde" 
            variant="standard" 
            value={data.text_ru} 
            onChange={handleChange('text_small_ru')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth
            id="standard-basic" 
            label="Iňlis dilinde" 
            variant="standard" 
            value={data.text_en} 
            onChange={handleChange('text_small_en')}/>
        </Grid>
        <Grid item xs={12}><h3>Surat saýlaň</h3></Grid>
        <Grid item xs={12} style={{}}>
          <input 
            type="file" 
            accept='image/*'
            multiple
            id="icon-button-photo"
            onChange={handleImages}
            hidden
          />

          <label htmlFor="icon-button-photo">
              <Button color="primary" component="span">
                <svg width="100" height="100" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00153 4.5C6.00153 5.32843 5.32995 6 4.50153 6C3.6731 6 3.00153 5.32843 3.00153 4.5C3.00153 3.67157 3.6731 3 4.50153 3C5.32995 3 6.00153 3.67157 6.00153 4.5Z" fill="black"/>
                  <path d="M2.00153 0C0.896956 0 0.00152588 0.89543 0.00152588 2V12C0.00152588 13.1046 0.896956 14 2.00153 14H14.0015C15.1061 14 16.0015 13.1046 16.0015 12V2C16.0015 0.895431 15.1061 0 14.0015 0H2.00153ZM14.0015 1C14.5538 1 15.0015 1.44772 15.0015 2V8.50001L11.2251 6.5528C11.0326 6.45655 10.8002 6.49428 10.648 6.64646L6.93782 10.3566L4.27888 8.58399C4.08056 8.45178 3.8165 8.47793 3.64797 8.64646L1.00153 11V2C1.00153 1.44772 1.44924 1 2.00153 1H14.0015Z" fill="black"/>
                </svg>
              </Button>
          </label>
          
          <label style={imageSources.length ? {display:'block'} : {display:'none'}}>
            {
              imageSources.map((image,i) =>{
                return (
                  <img style={{width:'30%', marginRight:'10px'}} src={image.url} key={i} onClick={()=>openDeleteImage(i)}/>
                )
              })
            }
          </label>

          
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={sendData} disabled={loading}>
            Ýatda saklamak 
            <CircularProgress style={loading ? {display:'block'} : {display:'none'}} sx={{ml:'10px'}} size={20}></CircularProgress>
          </Button>
        </Grid>
      </Grid>

      {valid ? <Alert text='Surat 3 kop bolmaly dal!!!' close={closeAlert}/> : ''}
      {valid2 ? <Alert text='Pozmak isleyanizmi?' button='Hawa' ok={deleteImage} close={closeAlert2}/> : ''}
    </div>
  );
}

export default Main;