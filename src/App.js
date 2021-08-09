import { div } from 'prelude-ls';
import React, {useEffect, useState} from 'react';
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'
import './App.css'
import FeatureMovie from './components/FeatureMovie';


export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect (() =>{
     const loadAll = async() => {
      //Pegando a lista total
      let list = await tmdb.getHomeList();
      
      setMovieList(list)

      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      console.log(chosen)
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }
     loadAll();
  },[])
  
  return(
    <div className="page">
      {featuredData && 
        <FeatureMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item,key) =>(
          <MovieRow key={key} title = {item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
