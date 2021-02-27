// Convention : placing the components in a folder in the src folder : naming it 'components'

// In the Navbar element : (rafce component) : we replace the <div> by a <nav> tag

import React from 'react'

// In each of the List item : we will have the Link component from the Gatsby (thats why we have to import it) - we will start by the Link to home : once every Link is established : where do we render the Navbar component ? 

import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
<Link to="/">Home</Link>
                </li>
                <li>
<Link to="/blog/">Blog</Link>
                </li>
                <li>
<Link to="/products/">Products</Link>
                </li>
                <li>
<Link to="/examples/">Examples</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
