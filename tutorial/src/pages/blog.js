import React from 'react'
// Below : same Link that was established on the index
// import{Link} from 'gatsby'
import Layout from '../components/layout'

// Import Blog MODULE CSS
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our blog page.</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
                </p>
            </div>
        </Layout>
    )
}

export default blog

// <Link to="/">Homepage</Link> this Link is no longer needed in blog component since with Layout the mapping will always put navbar on top