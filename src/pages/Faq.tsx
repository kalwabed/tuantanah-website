import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Faq = () => {
  return (
    <>
      <Header navlink="faq" />
      <main className="my-3">
        <Jumbotron fluid>
          <div className="text-center">
            Anda sampai pada halaman <b>Faq</b>
          </div>
        </Jumbotron>
      </main>
      <Footer />
    </>
  )
}

export default Faq
