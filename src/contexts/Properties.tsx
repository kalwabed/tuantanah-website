import React, { createContext, useState } from 'react'

import { CProperties } from '../types/index.types'

export const propertiesContext = createContext<CProperties>(undefined!)

const Properties = ({ children }: any) => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [properties, setProperties] = useState<string[] | any>([])

	return (
		<propertiesContext.Provider
			value={{ isLoading, setIsLoading, setProperties, properties }}
		>
			{children}
		</propertiesContext.Provider>
	)
}

export default Properties
