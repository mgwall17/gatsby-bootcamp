import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutPage}>
      <h1> The Project </h1>
      <h3>
        Vision: Transforming Science through Data-Driven Discovery </h3>
        <h3>Mission: To
        design, deploy, and expand a national Cyberinfrastructure for Life
        Sciences research, and to train scientists in its use.
      </h3>
      <p>
        CyVerse provides life scientists with powerful computational
        infrastructure to handle huge datasets and complex analyses, thus
        enabling data-driven discovery. Our extensible platforms provide data
        storage, bioinformatics tools, data visualization, interactive analyses,
        cloud services, APIs, and more.
      </p>

      <p>
        CyVerse is funded by the National Science Foundation’s Directorate for
        Biological Sciences. We are a dynamic virtual organization, led by the
        University of Arizona in partnership with the Texas Advanced Computing
        Center and Cold Spring Harbor Laboratory, fulfilling a broad mission to
        enable data-driven, collaborative research.
      </p>

      <h2>What is Cyberinfrastructure?</h2>

      <p>
        Cyberinfrastructure (also known as CI or computational infrastructure)
        provides solutions to the challenges of large-scale computational
        science. Just as physical infrastructure such as laboratories makes it
        possible to collect data, the hardware, software, and people that
        comprise cyberinfrastructure make it possible to store, share, and
        analyze data. Using cyberinfrastructure, teams of researchers located
        anywhere in the world can attempt to answer questions that previously
        were unapproachable because the computational requirements were too
        large or too complex.
      </p>

      <img src={`cyverseinfras-01.svg`} alt="graphic showing infrasturcture" />

      <h3>CyVerse cyberinfrastructure includes:</h3>
      <ul>
        <li>A data storage facility</li>

        <li>An interactive, web-based, analytical platform</li>

        <li>
          Cloud infrastructure to access remote servers for computation,
          analysis, and storage
        </li>

        <li>Web authentication and security services</li>

        <li>
          Support for scaling computational algorithms to run on large,
          high-speed computers
        </li>

        <li>Education and training in how to use cyberinfrastructure</li>

        <li>People with expertise in all of the above</li>
      </ul>

      <h2>History</h2>

      <p>
        CyVerse was originally created by the National Science Foundation in
        2008 with the name iPlant Collaborative to serve U.S. plant science
        communities. From its inception, iPlant quickly grew into a mature
        organization, providing powerful resources and offering scientific and
        technical support services to researchers nationally and
        internationally. In 2015, iPlant was rebranded as CyVerse to emphasize
        an expanded mission to serve all life sciences as our
        cyberinfrastructure is germane to all life sciences disciplines. By
        democratizing access to supercomputing capabilities, CyVerse provides a
        crucial resource to enable scientists to find solutions for the future.
      </p>

      <p>
        We rely upon your feedback to ensure we provide the infrastructure you
        need most to advance your science, development, and educational agenda.
        Community-driven needs shape our mission and our services.
      </p>
      </div>
    </Layout>
  )
}

export default AboutPage
