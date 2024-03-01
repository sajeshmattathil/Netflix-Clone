import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../../axios'
import {API_KEY,imageUrl} from '../../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const[movies,setMovie] = useState([])
  const [urlId,setUrlId] = useState(null)


  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovie(response.data.results)

   }).catch(err=>{console.log(err)})
  
    
  }, [])
  const handleMovie =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      console.log(response.data)

   if(response.data.results.length) setUrlId(response.data.results[response.data.results.length-1])
   
  }).catch(err=>console.log(err))
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
 <div className="row">
    <h2>{props.title}</h2>
    <div className="posters">
      {
        movies.map((movie)=>{
       return   <img onClick={()=>{handleMovie(movie.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+movie.backdrop_path }`} alt="row_post" />
        })
      }      
    </div>
  { urlId && <Youtube videoId={urlId.key} opts={opts} />  }
 </div>
  )
}

export default RowPost