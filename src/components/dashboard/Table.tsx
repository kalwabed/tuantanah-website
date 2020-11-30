import React, { useState } from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container, Button, Modal, ButtonGroup } from 'react-bootstrap'
import { html } from 'gridjs'
import { IoMdTrash, IoMdCreate, IoMdEye, IoMdCheckmark } from 'react-icons/io'
import { toast } from 'react-toastify'
import { useQueryCache } from 'react-query'

import { Property } from '../../types/index.types'
import { useHistory } from 'react-router-dom'
import { fetchDeleteProperty, fetchPropertySoldOut } from '../../utils/fetchAPI'

const Table = ({ property }: { property: Property[] }) => {
  const [showModal, setShowModal] = useState(false)
  const [pickProperty, setPickProperty] = useState({ id: '', title: '', type: '' })
  if (!property) return null
  const queryCache = useQueryCache()
  const history = useHistory()
  const newProperty = property.filter(prop => !prop.status.soldOut)

  const propertyRemove = async (id: string) => {
    const result = await fetchDeleteProperty(id)
    setShowModal(false)
    if (!result.success) {
      toast.error(result.msg)
    } else {
      toast.success('Properti berhasil dihapus', { autoClose: 5000 })
      queryCache.invalidateQueries('userProperty')
    }
  }

  const propertySoldOut = async (id: string) => {
    try {
      const result = await fetchPropertySoldOut(id)
      if (!result.success) {
        toast.error('Ups! tampaknya ada kesalahan. Silahkan refresh halaman ini')
      } else {
        toast.success('Status berhasil diubah!')
      }
      setShowModal(false)
      queryCache.invalidateQueries('userProperty')
    } catch (err) {
      console.error(err)
    }
  }

  const onModal = (id: string, title: string, type: string) => {
    setPickProperty({ id, title, type })
    setShowModal(true)
  }

  const onDetail = (id: string) => {
    history.push(`/dashboard/property/${id}`)
  }

  const onUpdate = (id: string) => {
    history.push(`/dashboard/property/up/${id}`)
  }

  return (
    <Container className="mb-3">
      <Modal show={showModal} backdrop="static">
        <Modal.Header closeButton onHide={() => setShowModal(false)}>
          {pickProperty.type === 'soldOut' ? 'Properti sudah terjual' : 'Hapus properti'}
        </Modal.Header>
        <Modal.Body>
          {pickProperty.type === 'soldOut' ? (
            <>
              Properti <b>{pickProperty.title}</b> akan ditayangkan pada halaman <i>Property</i> dengan status sudah
              terjual/sold out.
            </>
          ) : (
            <>
              Apakah anda yakin ingin menghapus properti <b>{pickProperty.title}</b> dari sistem?
            </>
          )}
        </Modal.Body>
        <hr />
        <Modal.Footer>
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Batal
            </button>
            {pickProperty.type === 'soldOut' ? (
              <button className="ml-1 btn btn-success" onClick={() => propertySoldOut(pickProperty.id)}>
                Terjual
              </button>
            ) : (
              <button className="ml-1 btn btn-danger" onClick={() => propertyRemove(pickProperty.id)}>
                Hapus
              </button>
            )}
          </div>
        </Modal.Footer>
      </Modal>
      <Grid
        data={newProperty.map((prop, i) => [
          i + 1,
          prop.mainPicture,
          prop.title,
          prop.size.display,
          prop.location.display,
          _(
            <ButtonGroup aria-label="table-actions">
              <Button size="sm" variant="info" onClick={() => onDetail(prop._id)}>
                <IoMdEye />
              </Button>
              <Button size="sm" variant="warning" onClick={() => onUpdate(prop._id)}>
                <IoMdCreate />
              </Button>
              <Button size="sm" variant="success" onClick={() => onModal(prop._id, prop.title, 'soldOut')}>
                <IoMdCheckmark />
              </Button>
              <Button size="sm" variant="danger" onClick={() => onModal(prop._id, prop.title, 'delete')}>
                <IoMdTrash />
              </Button>
            </ButtonGroup>
          )
        ])}
        columns={[
          { name: '#', width: '1%' },
          {
            name: 'Gambar',
            formatter: cell => html(`<img src='${cell}' width='100%'/>`),
            width: '7%'
          },
          'Judul',
          { name: 'Ukuran', width: '5%' },
          'Lokasi',
          'Aksi'
        ]}
        search={true}
        pagination={{ enabled: true, limit: 10 }}
      />
    </Container>
  )
}

export default Table
