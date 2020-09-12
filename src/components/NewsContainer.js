import React from 'react'
import Categories from './Categories'

function NewsContainer(props) {
    
    
     return(
    <section className="mw8 center">
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>    
    <h2 className="athelas ph3 ph0-1">News</h2>
    <button style={{height: '40px'}}
    onClick={props.onSignout}
    >Sign out</button>
    </div>
    <Categories /> 
     {props.children}
    </section>
    );
}

export default NewsContainer