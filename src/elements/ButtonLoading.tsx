import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import type { IBtnLoadingProps } from '../types/index.types'

const ButtonLoading: React.FC<IBtnLoadingProps> = (props: any) => {
	const { loading, fill, password, type, block }: IBtnLoadingProps = props
	return (
		<Button
			block={block}
			type={type}
			variant={password.length < 5 || loading ? 'secondary' : 'success'}
			disabled={password.length < 5 || loading}
		>
			{loading && 'Processing  '}
			{loading && <Spinner as='span' animation='border' size='sm' />}
			{!loading && fill}
		</Button>
	)
}

export default ButtonLoading
