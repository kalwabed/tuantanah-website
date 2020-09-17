import React from 'react'

const Detail = () => {
	const id = document.location.pathname.split('/')[4]
	return <div>ini detail dari {id}</div>
}

export default Detail
