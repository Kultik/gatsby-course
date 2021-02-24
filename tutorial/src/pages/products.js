import React, { Component } from 'react'
import Layout from '../components/layout'
// Importing STYLES 
import styles from '../components/products.module.css'
// Console log to show that styles is a JS object
console.log(styles)

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                    <h1>This is our products page</h1>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
                    </p>
                </div>
            </Layout>
        )
    }
}
