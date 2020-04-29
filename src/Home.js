import React from 'react'
import {Link} from "react-router-dom";
import BlogApi from './blog'

const Home = () => (
    <div className="App">


        <div className="post_grid">
            {
                 BlogApi.all().map(p => (
                    <div className="post">
                    <img
                        src="https://images.unsplash.com/photo-1582719366768-de4481b828ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                    </img>
                 <h2>{p.title}</h2>
                    <p><a href="#">Read more</a></p>
                   </div>
                    ))};

            }
           
            
             

        </div>
    </div>
)

export default Home