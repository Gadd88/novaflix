
import { Carrousel } from '../../core/components/carrousel/carrousel';
import { useTmdb } from '../../core/services/useTmdb';
import { IoBookmarkOutline, IoBookmarkSharp ,IoShareSocialOutline } from 'react-icons/io5';
import { BiLike } from 'react-icons/bi';
import './detailView.css'
import Header from '../../core/components/header/header';
import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { Footer } from '../../core/components/footer/footer';


const DetailView = ()=>{

  const {handleFavs, isFav, movieId} = useContext(MoviesContext)

<<<<<<< HEAD
  const locationHash = ((location.pathname.split('/')))

  
  const [movieId, setMovieId]= useState((locationHash[2]))
  
  const {information, error}=useTmdb({movieId,kindOfSearch:(locationHash[1]) })
 
console.log('el detalle es', information)

=======
  const locationHash = ((location.hash.split('/')))
  
  const {information, error}=useTmdb({movieId,kindOfSearch:(locationHash[1]) })

  
>>>>>>> 951387c5d262ab54fb91f0d39af7c847bcfb2fa8
  const selectedMovie = { 
    id:information.id,
    title:information.title,
    poster:information.poster,
    description:information.overview,
    kindOfSearch:locationHash[1],
    genres:information.genres
  }
  const isFavMovie = isFav(movieId)
  
  const saveMovie = ()=>{
    handleFavs(selectedMovie)
  }

  return(
  <>
      <Header/>
      <main className='body' >
          <div className='detail_main_container'>
            <img 
              className='detail_img' 
              src={`https://image.tmdb.org/t/p/original${information.poster}`} 
              />
            <div className='container-bar-info'>
              <section className='body_action_bar' >
                <BiLike className='icon'/>
                <span 
                  onClick={() => saveMovie()} 
                  className='icon'>
                  {
                    isFavMovie.length>0 && <IoBookmarkSharp/> || <IoBookmarkOutline/>
                  }
                </span>
                <IoShareSocialOutline className='icon' />
              </section>
              <section className='description_container'>
                <div className='detail_container'>
                  <h1>{information?.title}</h1>
                  <p>{information?.overview}</p>
                </div>
              </section>
            </div>    
          </div>
<<<<<<< HEAD
            <section className='carrousel_container'>
              <h2>{locationHash[1]==='movie'? 'Peliculas' : 'Series'} Relacionadas</h2> 
                <div className='cards_container'>
                    <Carrousel type={'similar'} movieId={movieId} kindOfSearch={(location.pathname.split('/'))[1]}/>
                    <div className='cards'></div>
                    
                </div>
            </section>          
=======
          <section className='relacionadas'>
            <h2>{locationHash[1]==='movie'? 'Peliculas' : 'Series'} Relacionadas</h2>  
            <Carrousel type={'similar'} movieId={movieId} kindOfSearch={(location.hash.split('/'))[1]}/>
              
          </section>          
>>>>>>> 951387c5d262ab54fb91f0d39af7c847bcfb2fa8
      </main>
      <Footer />
  </>
)};

export default DetailView;
