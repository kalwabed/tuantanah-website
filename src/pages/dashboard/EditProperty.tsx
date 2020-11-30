import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import EditForm from '../../components/dashboard/EditPropertyForm'
import Header from '../../components/dashboard/Header'
import Footer from '../../components/Footer'
import { authContext } from '../../contexts/Auth'
import { fetchPropertyById, fetchProvinsi } from '../../utils/fetchAPI'

const EditProperty = () => {
  const id = document.location.pathname.split('/')[4]
  const { data, isLoading } = useQuery(['propById', id], fetchPropertyById)
  const dataProvinsi = useQuery('provinsi', fetchProvinsi, { enabled: data })
  const { user } = React.useContext(authContext)

  return (
    <>
      <Header />
      <div className="mt-3"></div>
      <Link to="/dashboard">
        <Button variant="light" size="lg" className="my-2 ml-2">
          <IoMdArrowRoundBack /> Kembali
        </Button>
      </Link>
      {isLoading && (
        <div className="text-center p-5">
          Memuat data properti...
          <Spinner variant="success" animation="grow" />
        </div>
      )}
      {/* 'memuat' yang atas dan bawah untuk menciptakan efek dinamis */}
      {dataProvinsi.isLoading && (
        <div className="text-center p-5">
          Memuat data provinsi...
          <Spinner variant="success" animation="grow" />
        </div>
      )}

      {!isLoading && !dataProvinsi.isLoading && (
        <EditForm prop={...data.property} dataProvinsi={dataProvinsi.data} user={user} />
      )}
      {!isLoading && !dataProvinsi.isLoading && <Footer isDashboard={true} />}
    </>
  )
}

export default EditProperty
