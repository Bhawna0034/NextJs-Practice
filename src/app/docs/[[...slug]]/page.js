import React from 'react'

const Docs = async({params}) => {
    const {slug} = await params;
    if(!slug || slug.length === 0){
        return <h1>Docs Page</h1>
    }
    else if(slug.length === 2){
       return <h1>Viewing Docs for feature {slug[0]} and concept {slug[1]}</h1>
    }
    else if(slug.length === 1 ){
        return <h1>Viewing Docs for feature {slug[0]}</h1>
        
    }
  return (
    <div>
      Docs Page
    </div>
  )
}

export default Docs
