import React from 'react'

function Page(props) {
    const id = props.match.params.id
    
    return (
        <div className='page'>Page {id}</div>
    )
}

export default Page