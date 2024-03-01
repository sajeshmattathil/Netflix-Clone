import React,{useEffect,useState} from 'react'
import './Banner.css'
import axios  from '../../../axios'
import {imageUrl,API_KEY} from '../../../Constants/Constants'

function Banner() {
const [movie,setMovie] = useState([])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>
      {
        setMovie(response.data.results[1])
    }
      )
  },[])

  return (
   <div className="banner">
      <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path : " "})`}}
         className="content">
        <h1 className="title">{ movie ? movie.title : " "}</h1>
        <div className="banner_buttons">
            <button className="button">Play </button>
            <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : " "}</h1>
     <div className="fade"></div>
      </div>
   </div>
  )
}

export default Banner