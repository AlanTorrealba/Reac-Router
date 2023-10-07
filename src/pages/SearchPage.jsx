import React, { useEffect } from 'react'

function SearchPage({routeParams}) {
useEffect(()=>{
    document.title = `has buscado ${routeParams.query}`
},[])

  return (
    <div>estos son los resultados para {routeParams.query} </div>
  )
}

export default SearchPage