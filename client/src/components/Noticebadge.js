import React from 'react'

const NoticeBadge = (props) => {
  const { notice } = props
  return <span className='badge badge-light p-2 text-danger shadow-lg rounded-pill'>{notice}</span>
}

export default NoticeBadge
