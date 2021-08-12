import React from 'react'

const Masthead = () => {
    return (
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To My Portfolio!</div>
                <div className="masthead-heading text-uppercase">Im Kosasih Wahid</div>
                <a href="#services"><button style={{ padding: '20px 60px', backgroundColor: '#ffc800', borderRadius: '10px', border: '#fff' }}><h4>Tell Me More</h4></button></a>
            </div>
        </header>
    )
}

export default Masthead
