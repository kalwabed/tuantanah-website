import React from 'react'
import { useQuery } from 'react-query'

import EditForm from '../../components/dashboard/EditPropertyForm'
import Header from '../../components/dashboard/Header'
import { fetchPropertyById } from '../../utils/fetchAPI'

const EditProperty = () => {
	// const id = document.location.pathname.split('/')[4]
	// const { data, isLoading } = useQuery(['propById', id], fetchPropertyById)
	// if (!isLoading) console.log(data.property)
	return (
		<>
			<Header />
			<div className='mt-3'></div>
			<EditForm />
		</>
	)
}

export default EditProperty
