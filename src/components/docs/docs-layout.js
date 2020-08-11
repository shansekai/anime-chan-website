import React from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import Docs from './doc'

const MDXLayout = ({ children }) => {
  return (
    <Layout>
      <div>
        <Docs>{children}</Docs>
      </div>
    </Layout>
  )
}

export default MDXLayout
