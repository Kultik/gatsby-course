import React from 'react'
// Since we will access the images, we set up graphql
import {graphql, useStaticQuery} from 'gatsby'

// IMPORTING IMAGES

// REACT TRAD WAY : img tag : not a JS file : so full path needed
import imageReact from '../images/image-4.jpeg'

// GATSBY WAY : PARTY
import Image from 'gatsby-image'

// SETTING UP QUERY

const getImages = graphql`
    {
        fixed: file(relativePath: {eq: "image-3.jpeg"}) {
            childImageSharp {
            fixed (width:400, grayscale:true, rotate:-30){
                ...GatsbyImageSharpFixed
            }
            }
            size
        }
        fluid: file(relativePath: {eq: "image-4.jpeg"}) {
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            }
            size
        }
    }

`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data)

    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic image</h3>
                <img src={imageReact} width="100%"></img>
            </article>
            <article className="single-image">
                <h3>Fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>Fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} />    
                </div>
            </article>
        </section>
    )
}

export default Images
