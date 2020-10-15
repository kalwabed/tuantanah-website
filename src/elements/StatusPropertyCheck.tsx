/* eslint-disable no-constant-condition */
import React from 'react'
import { Badge } from 'react-bootstrap'
import { IoMdSquareOutline, IoMdCheckbox } from 'react-icons/io'

type props = {
	shm: number
	negotiation: boolean
}

const StatusPropertyCheck = ({ shm, negotiation }: props) => {
	return (
		<>
			<Badge variant='light' className='mr-1'>
				{negotiation ? <IoMdCheckbox /> : <IoMdSquareOutline />} NEGO
			</Badge>
			<Badge variant='light'>{shm === 2 ? <IoMdCheckbox /> : <IoMdSquareOutline />} SHM</Badge>
		</>
	)
}

export default StatusPropertyCheck
