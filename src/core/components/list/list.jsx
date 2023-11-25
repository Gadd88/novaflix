import './list.css'
import React, { useState } from 'react';
import { useTmdb } from '../../services/useTmdb';
import { NavLink } from 'react-router-dom';
import { ListSkeleton } from '../loadingSkeleton/listSkeleton/listSkeleton';
import { MoviesContext } from '../../../context/MoviesContext';
import { useContext } from 'react';

const List = ({searchedMovie, selectedCategoryName, kindOfSearch, selectedCategory})=>{

//Filtro por genero

    let pathSelection ='discover'
    let genreSelection = 'all_genres'
    const{id, name} = selectedCategory
    if(id!=='all genres'){
        pathSelection = 'discover_by_genre'
        genreSelection = id  
    }

    const {information, error, isLoading}= useTmdb ({type:pathSelection, genreId:genreSelection, kindOfSearch:kindOfSearch})

//Filtro por búsqueda

    let list = information

    if(searchedMovie !== ''){
        
        list = information.filter(movie=> (movie.title.toLowerCase()).includes((`${searchedMovie}`).toLowerCase()))

    }

    const {setMovieId}=useContext(MoviesContext)


    const handleOnClick = (id)=>{
        setMovieId(id)

      
    }
    return(
        <>
          {isLoading ? <ListSkeleton/> : list.map((movie)=>{return(
                
                    <div key={movie.id} id={movie.id} onClick={()=>{handleOnClick(movie.id)}}>
                        <NavLink to={`/${kindOfSearch}/${movie.id}` } >
                            <div className='list_content' >
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster}`}/>
                                <p>{ movie.title }</p>
                            </div>
                        </NavLink>

                    </div>    
                
            )})}
                
            

        </>
    )
}

export {List}