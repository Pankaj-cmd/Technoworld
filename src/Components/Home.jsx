import React from 'react'
import vg from "../assets/2.webp";

import{ AiFillGoogleCircle ,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Soloution to all your problems</p>
      </main>
      
    </div>

    <div className="home2" id=''>
        <img src={vg} alt="graphic" />
        <div>
        <p>
          we are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in childern.
        </p>
        </div>
    </div>


    <div className="home3" id='about'>
      <div>
        <h1>Who we are</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi doloremque ratione? Tempore, cumque veniam, tenetur aspernatur debitis minima delectus odit et ex temporibus excepturi, incidunt inventore architecto placeat alias.
          Placeat, dolore ipsam fuga voluptate dolorem reprehenderit laboriosam blanditiis rerum eum quibusdam asperiores culpa aliquam similique dolor magni, nemo sint ad perspiciatis omnis quo voluptatibus vel ex? Magni, nesciunt odio.
        </p>
      </div>
    </div>


    <div className="home4" id='brands'>

    <div>
      <h1>Brands</h1>
      <article>
        <div style={{
          animationDelay:"0.3s"
        }}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
        <div style={{
          animationDelay:"0.5s"
        }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
        </div>
        <div style={{
          animationDelay:"0.7s"
        }}>
          <AiFillInstagram />
          <p>Instagarm</p>
        </div>
        <div style={{
          animationDelay:"1s"
        }}>
          <AiFillYoutube />
          <p>Youtube</p>
        </div>
      </article>

    </div>

    </div>

  </>
  )
}

export default Home