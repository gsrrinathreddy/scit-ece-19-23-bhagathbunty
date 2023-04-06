import { Typography } from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';


export default function Experience(){
  let [loader,setLoader]= useState(true);
  let [Experience, setExperience]=useState(null);

  const getExperienceData = async () => axios.get('http://localhost:8000/Experience')
                                                  .then(res=>{
                                                      setExperience(res.data)
                                                      setLoader(false)
                                                  }).Catch(err => console.log(err))

          useEffect(()=>{
              getExperienceData();

          },[])
      console.log("Experience",Experience)
  return(
      <>
      fresher
      </>
  )
}