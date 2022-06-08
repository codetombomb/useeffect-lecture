import React from "react";
import './Home.css'

const Home = ({name}) => {
    return (
        <div className="Home">
            <h1>Welcome {name}!</h1>
            <p>This is a page with words and things.</p>
        </div>
    )
}
export default Home