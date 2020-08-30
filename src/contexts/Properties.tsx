import React, { createContext, useState, useEffect } from 'react'

import { CProperties, Property } from '../types/index.types'
import { fetchAllProperty } from '../utils/fetchAPI'

export const propertiesContext = createContext<CProperties>(undefined!)

const Properties = ({ children }: any) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [properties, setProperties] = useState<string[] | any>([])
	const [showProperties, setShowProperties] = useState<Property | any>({})

	useEffect(() => {
		// untuk tetap dinamis saat browser mulai kembali
		const check = async () => {
			if (
				Object.keys(showProperties).length < 1 &&
				document.location.pathname.split('/')[2]
			) {
				await getOneProperty(document.location.pathname.split('/')[2])
			}
		}
		check()
	}, [])

	const getOneProperty = async (id: string) => {
		try {
			setIsLoading(true)
			const props = await fetchAllProperty()
			const data = props.find((prop: Property) => prop._id === id)
			if (data) setShowProperties(data)
			setIsLoading(false)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<propertiesContext.Provider
			value={{
				isLoading,
				setIsLoading,
				setProperties,
				properties,
				showProperties,
				getOneProperty,
			}}
		>
			{children}
		</propertiesContext.Provider>
	)
}

export default Properties
