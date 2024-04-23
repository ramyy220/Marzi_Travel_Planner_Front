import React from 'react'
import DestinationsCard from './DestinationsCard'


const DestinationsList = ({data}) => {
  return <>
    {data.map((item) => (
      <DestinationsCard  item={item} />
    ))}
    </>
}

export default DestinationsList
