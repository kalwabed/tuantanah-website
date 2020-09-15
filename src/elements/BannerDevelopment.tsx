import React from 'react'
import { Alert } from 'react-bootstrap'

const BannerDevelopment = () => {
	if (process.env.NODE_ENV === 'production') {
		return (
			<Alert variant='info' className='m-0'>
				<p className='mb-0 text-center'>situs sedang dalam masa pengembangan</p>
			</Alert>
		)
	} else {
		return null
	}
}

export default BannerDevelopment
