import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

interface IPagination {
  pageNo: number
  pageSize: number
}

interface IProps {
  initPagination: IPagination
  total: number
  onChange: Function
}

export default (props: IProps) => {
  const { total, initPagination, onChange } = props
  const [pageNo, setNo] = useState(initPagination.pageNo)
  const [pageSize] = useState(initPagination.pageSize)
  const [maxPages, setMaxPages] = useState(Math.ceil(total / pageSize) || 1)

  useEffect(() => {
    setMaxPages(Math.ceil(total / pageSize) || 1)
    setNo(initPagination.pageNo)
    onChange({ pageNo: initPagination.pageNo, pageSize })
  }, [total, pageSize])

  const handlePaginationChange = (accumlation: number) => {
    let no = accumlation + pageNo
    if (no > maxPages) no = maxPages
    else if (no < 1) no = 1

    onChange({ pageNo: no, pageSize })
    setNo(no)
  }

  return (
    <div className={styles.paginationWrapper}>
      <span className={styles.arrow} onClick={() => handlePaginationChange(-1)}>
        ←
      </span>
      <span>{pageNo}</span> / <span>{maxPages}</span>
      <span className={styles.arrow} onClick={() => handlePaginationChange(1)}>
        →
      </span>
    </div>
  )
}
