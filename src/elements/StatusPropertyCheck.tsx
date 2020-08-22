/* eslint-disable no-constant-condition */
import React from 'react'
import { Badge } from 'react-bootstrap'
import { IoMdSquareOutline, IoMdCheckbox } from 'react-icons/io'

const StatusPropertyCheck = () => {
    return (
        <>
            <Badge variant="dark" className="mr-1">
                {10 > 2 ? <IoMdCheckbox /> : <IoMdSquareOutline />} NEGO
            </Badge>
            <Badge variant="dark">
                {10 >= 2 ? <IoMdCheckbox /> : <IoMdSquareOutline />} SHM
            </Badge>
        </>
    )
}

export default StatusPropertyCheck
