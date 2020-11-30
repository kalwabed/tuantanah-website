import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Faq = () => {
  return (
    <>
      <Header navlink="faq" />
      <main>
        <Jumbotron fluid>
          Anda sampai pada halaman <b>Faq</b>
        </Jumbotron>
      </main>
      <Footer />
    </>
  )
}

export default Faq
