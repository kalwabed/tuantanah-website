import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'

import EditForm from '../../components/dashboard/EditPropertyForm'
import Header from '../../components/dashboard/Header'
import Footer from '../../components/Footer'
import { fetchPropertyById, fetchProvinsi } from '../../utils/fetchAPI'

const EditProperty = () => {
	const id = document.location.pathname.split('/')[4]
	const { data, isLoading } = useQuery(['propById', id], fetchPropertyById)
	const dataProvinsi = useQuery('provinsi', fetchProvinsi, { enabled: data })

	return (
		<>
			<Header />
			<div className='mt-3'></div>
			{isLoading && (
				<div className='text-center p-5'>
					Memuat data properti...
					<Spinner variant='success' animation='grow' />
				</div>
			)}
			{/* 'memuat' yang atas dan bawah untuk menciptakan efek dinamis */}
			{dataProvinsi.isLoading && (
				<div className='text-center p-5'>
					Memuat data provinsi...
					<Spinner variant='success' animation='grow' />
				</div>
			)}

			{!isLoading && !dataProvinsi.isLoading && (
				<EditForm prop={...data.property} dataProvinsi={dataProvinsi.data} />
			)}
			{!isLoading && !dataProvinsi.isLoading && <Footer isDashboard={true} />}
		</>
	)
}

export default EditProperty
