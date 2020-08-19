import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Animation from '../components/animation'

const IndexPage = () => {
  return (
    <Layout>
    <Head title="Home"/>
    <h1> Hello</h1>
    <Animation />
      <h2>Yo, what's up.</h2>
      <p>Need a developer? <Link to="/contact"> Contact me. </Link></p>
    </Layout>
  )
}

export default IndexPage