import React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'

import { navBar, title } from './layout.module.css'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <main>
      <title>{pageTitle}</title>
      <p className={title}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul>
          <li className={navBar}><Link to="/">Home</Link></li>
          <li className={navBar}><Link to="/about">About</Link></li>
          <li className={navBar}><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      { children }
    </main>
  )
}

export default Layout