import { ErrorMessage } from '@hookform/error-message'
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Badge, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import LazyLoad from 'react-lazyload'
import { useMutation, useQuery, useQueryCache } from 'react-query'
import Quill from 'react-quill'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { apiKotaKab, apiProvinsi, IApiUser, Inputs, Property } from '../../types/index.types'
import { fetchKotaByProv, fetchUpdateProperty } from '../../utils/fetchAPI'

interface newInputs extends Inputs {
  gallery: FileList
}

const EditPropertyForm = ({
  prop,
  dataProvinsi,
  user
}: {
  prop: Property
  dataProvinsi: apiProvinsi
  user: IApiUser
}) => {
  const { isLarge, title, size, price, status, description, contact, mainPicture, gallery } = prop
  document.title = title
  const { register, watch, handleSubmit, errors, setValue } = useForm<newInputs>()
  const [kota, setKota] = useState(prop.location.provinceId)
  const [deskripsi, setDeskripsi] = useState(description)
  const [labelUtama, setLabelUtama] = useState('Unggah foto')
  const [labelGaleri, setLabelGaleri] = useState('Unggah maks. 4 foto')
  const [isLuas, setIsLuas] = useState(isLarge)
  const dataKota = useQuery(['kota', kota], fetchKotaByProv)
  const queryCache = useQueryCache()
  const [mutate, { isLoading }] = useMutation(fetchUpdateProperty, {
    onSuccess: () => {
      queryCache.invalidateQueries(['propById', prop._id])
      toast.success('Data berhasil diubah!')
    },
    onError: () => {
      toast.error('Ups! ada masalah saat mengirim data. Pastikan anda sudah mengirim data dengan benar')
    }
  })

  const onSubmit = async (data: newInputs) => {
    const formData = new FormData()
    formData.append('_id', prop._id)
    formData.append('fullName', data.fullName)
    formData.append('title', data.title)
    formData.append('provinsi', data.provinsi)
    formData.append('kota', data.kota)
    formData.append('description', description)
    formData.append('luas', String(data.luas))
    formData.append('panjang', String(data.panjang))
    formData.append('lebar', String(data.lebar))
    formData.append('price', String(data.price))
    formData.append('userId', user._id)
    formData.append('isLuas', String(isLuas))
    formData.append('mainPicture', data.mainPicture[0])
    formData.append('nego', String(data.nego))
    formData.append('kontak1', String(data.kontak1))
    formData.append('kontak2', String(data.kontak2))
    formData.append('kontak3', String(data.kontak3))
    formData.append('kontak4', String(data.kontak4))
    formData.append('checkKontak1', String(data.checkKontak1))
    formData.append('checkKontak2', String(data.checkKontak2))
    formData.append('checkKontak3', String(data.checkKontak3))
    formData.append('checkKontak4', String(data.checkKontak4))
    formData.append('userKontak1', String(data.userKontak1))
    formData.append('userKontak2', String(data.userKontak2))
    formData.append('userKontak3', String(data.userKontak3))
    formData.append('userKontak4', String(data.userKontak4))
    if (data.gallery.length !== 0) {
      for (let i = 0; i < data.gallery.length; i++) {
        formData.append('gallery', data.gallery[i])
      }
    } else formData.append('gallery', 'undefined')

    //? for development purpose!
    // formData.forEach((val, key) => {
    // 	console.log(`${key}, ${val}`)
    // })
    //? ----------------------

    try {
      const result = await mutate(formData)
      setValue('gallery', undefined)
      setValue('mainPicture', undefined)
      setLabelUtama('Unggah foto utama')
      setLabelGaleri('Unggah maks. 4 foto')
      if (!result.success) {
        console.error(result.msg)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* gambar utama dan galeri  */}
          <Card as={Col} className="mr-2">
            <Card.Body>
              <Row>
                <LazyLoad once height={50} placeholder={<Spinner animation="grow" />}>
                  <Card.Img src={mainPicture} alt={title} className="img-gallery" />
                </LazyLoad>
              </Row>

              <Row className="my-2">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="mainPicture">Foto Utama</Form.Label>
                  <Form.File
                    ref={register}
                    accept="image/*"
                    custom
                    id="mainPicture"
                    name="mainPicture"
                    label={labelUtama}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabelUtama(e.target.files![0].name)}
                  />
                </Form.Group>
              </Row>

              <Row>
                {gallery.length < 1 && (
                  <Col>
                    <Card className="text-center text-muted">
                      <Card.Body>Galeri belum ditambahkan</Card.Body>
                    </Card>
                  </Col>
                )}
                {gallery.length >= 1 && (
                  <Fade direction="left" className="col-12 col-md-3" triggerOnce cascade>
                    {gallery.map(gall => (
                      <LazyLoad key={gall.imageUrl} once height={50} placeholder={<Spinner animation="grow" />}>
                        <Card.Img src={gall.imageUrl} alt="Gallery" />
                      </LazyLoad>
                    ))}
                  </Fade>
                )}
              </Row>

              <Form.Row className="my-2">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="gallery">Unggah Galeri</Form.Label>
                  <Form.File
                    multiple
                    custom
                    id="gallery"
                    name="gallery"
                    ref={register}
                    accept="image/*"
                    label={labelGaleri}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLabelGaleri(`${e.target.files?.length} gambar terpilih`)
                    }
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
          </Card>

          {/* identitas */}
          <Card as={Col}>
            <Card.Body>
              {/* nama & judul */}
              <Form.Row>
                {/* nama */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="fullName">Nama Lengkap / Perusahaan</Form.Label>
                  <Form.Control readOnly defaultValue="Kalwabed" id="fullName" name="fullName" ref={register} />
                  <Form.Text muted>Masukan diatas otomatis merujuk pada Nama pengguna</Form.Text>
                </Form.Group>
                {/* judul */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="title">Judul</Form.Label>
                  <Form.Control
                    defaultValue={title}
                    id="title"
                    name="title"
                    placeholder="contoh: Kaliwa Residence"
                    ref={register({
                      required: 'Mohon sertakan judul yang valid',
                      maxLength: {
                        value: 100,
                        message: 'Judul maksimal 100 karakter'
                      }
                    })}
                  />
                  <Form.Text muted>Judul bisa diisi dengan nama lahan, nama perumahan, dsb.</Form.Text>
                  <ErrorMessage
                    name="title"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
              </Form.Row>

              {/* lokasi */}
              <Form.Row>
                {/* kabupaten */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="provinsi">Provinsi</Form.Label>
                  <Form.Control
                    custom
                    id="provinsi"
                    name="provinsi"
                    as="select"
                    ref={register({
                      required: 'Mohon sertakan provinsi dengan benar'
                    })}
                  >
                    <option value="" disabled>
                      -- Provinsi --
                    </option>
                    {dataProvinsi.provinsi.map(prov => (
                      <option
                        onClick={() => setKota(prov.id)}
                        key={prov.id}
                        value={prov.id}
                        selected={prov.id === prop.location.provinceId}
                      >
                        {prov.nama}
                      </option>
                    ))}
                  </Form.Control>
                  <ErrorMessage
                    name="provinsi"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
                {/* kota */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="kota">Kota/Kabupaten</Form.Label>
                  <Form.Control id="kota" name="kota" custom as="select" ref={register} disabled={dataKota.isLoading}>
                    <option value="" disabled>
                      -- Kota/Kabupaten --
                    </option>
                    {dataKota.data &&
                      dataKota.data.kota_kabupaten.map((kota: apiKotaKab) => (
                        <option key={kota.id} value={kota.id} selected={kota.id === prop.location.cityId}>
                          {kota.nama}
                        </option>
                      ))}
                  </Form.Control>
                  <ErrorMessage
                    name="kota"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
              </Form.Row>

              {/* panjang & lebar */}
              <Form.Row>
                {/* panjang */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="panjang">Panjang</Form.Label>
                  <Form.Control
                    id="panjang"
                    name="panjang"
                    placeholder="contoh: 10"
                    ref={register({
                      required: {
                        message: 'Mohon sertakan panjang yang valid',
                        value: !isLuas
                      }
                    })}
                    disabled={isLuas}
                    defaultValue={!isLuas ? size.long : ''}
                  />
                  <Form.Text muted>Panjang properti berdasarkan ukuran meter (m)</Form.Text>
                  <ErrorMessage
                    name="panjang"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
                {/* lebar */}
                <Form.Group as={Col}>
                  <Form.Label htmlFor="lebar">Lebar</Form.Label>
                  <Form.Control
                    id="lebar"
                    name="lebar"
                    placeholder="contoh: 1,5"
                    defaultValue={!isLuas ? size.wide : ''}
                    disabled={isLuas}
                    ref={register({
                      required: {
                        message: 'Mohon sertakan lebar yang valid',
                        value: !isLuas
                      }
                    })}
                  />
                  <Form.Text muted>Lebar properti berdasarkan ukuran meter (m)</Form.Text>
                  <ErrorMessage
                    name="lebar"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
              </Form.Row>

              {/* ceklis pakai luas */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Check
                    ref={register}
                    onClick={() => setIsLuas(!isLuas)}
                    id="isLuas"
                    name="isLuas"
                    defaultChecked={isLuas}
                    custom
                    label="Pakai ukuran luas"
                  />
                  <Form.Text muted>
                    Pakai luas jika properti Anda bukan berupa rumah (contoh: kebun, lahan, dsb)
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              {/* luas */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="luas">Luas</Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="luas"
                      name="luas"
                      placeholder="contoh: 4"
                      disabled={!isLuas}
                      defaultValue={isLuas ? size.large : ''}
                      ref={register({
                        required: {
                          message: 'Mohon sertakan luas yang valid',
                          value: isLuas
                        }
                      })}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>Hektar</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Text muted>Luas properti berdasarkan ukuran hektar (ha)</Form.Text>
                  <ErrorMessage
                    name="luas"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
              </Form.Row>

              {/* harga dan ceklis negosiasi */}
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label htmlFor="price">Harga</Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="price"
                      name="price"
                      placeholder="contoh: 10"
                      defaultValue={price}
                      ref={register({
                        required: 'Mohon sertakan harga yang valid',
                        pattern: {
                          // eslint-disable-next-line no-useless-escape
                          value: /^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/gm,
                          message: 'Hanya menerima masukan angka, koma, dan titik'
                        }
                      })}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>
                        <Form.Check
                          custom
                          name="nego"
                          id="nego"
                          label="Negosiasi ?"
                          type="checkbox"
                          ref={register}
                          defaultChecked={status.negotiation}
                        />
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                  <Form.Text muted>
                    Harga properti dalam format angka, satuan juta (contoh: 90,3 [berarti 90,3 juta])
                  </Form.Text>
                  <ErrorMessage
                    name="price"
                    errors={errors}
                    render={({ message }) => <Badge variant="warning">{message}</Badge>}
                  />
                </Form.Group>
              </Form.Row>

              {/* deskripsi */}
              <Form.Row className="my-2">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="deskripsi">Deskripsi</Form.Label>
                  <Quill theme="snow" value={deskripsi} onChange={setDeskripsi} />
                  <Form.Text muted>Sertakan deskripsi tentang properti secara detail</Form.Text>
                </Form.Group>
              </Form.Row>

              {/* Kontak */}
              <Form.Label className="mt-3">Kontak</Form.Label>
              <Form.Row>
                {/* Kontak 1 */}
                <Form.Group as={Col} controlId="check-kontak1">
                  <Form.Control as="select" name="checkKontak1" ref={register()} custom>
                    {contact[0] ? (
                      <>
                        <option value={contact[0].type}>
                          {contact[0].type == 1
                            ? 'Whatsapp'
                            : contact[0].type == 2
                            ? 'Facebook'
                            : contact[0].type == 3
                            ? 'Email'
                            : ''}
                        </option>
                        {contact[0].type !== 1 && <option value="1">Whatsapp</option>}
                        {contact[0].type !== 2 && <option value="2">Facebook</option>}
                        {contact[0].type !== 3 && <option value="3">Email</option>}
                        <option value="0">Kosong</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Kosong</option>
                        <option value="1">Whatsapp</option>
                        <option value="2">Facebook</option>
                        <option value="3">Email</option>
                      </>
                    )}
                  </Form.Control>
                  <Form.Control
                    name="kontak1"
                    ref={register()}
                    disabled={watch('checkKontak1') == 0 ? true : false}
                    defaultValue={contact[0] ? contact[0].url : ''}
                    placeholder={
                      watch('checkKontak1') == 1
                        ? '628xxxxxxxxx'
                        : watch('checkKontak1') == 2
                        ? 'Facebook username'
                        : watch('checkKontak1') == 3
                        ? 'your@email.com'
                        : ''
                    }
                  />
                  <Form.Control
                    className="mt-1"
                    name="userKontak1"
                    ref={register()}
                    defaultValue={contact[0] ? contact[0].name : ''}
                    placeholder="Nama tampilan"
                    disabled={watch('checkKontak1') == 0 ? true : false}
                  />
                </Form.Group>
                {/* Kontak 2 */}
                <Form.Group as={Col} controlId="check-kontak2">
                  <Form.Control as="select" name="checkKontak2" ref={register()} custom>
                    {contact[1] ? (
                      <>
                        <option value={contact[1].type}>
                          {contact[1].type == 1
                            ? 'Whatsapp'
                            : contact[1].type == 2
                            ? 'Facebook'
                            : contact[1].type == 3
                            ? 'Email'
                            : ''}
                        </option>
                        {contact[1].type !== 1 && <option value="1">Whatsapp</option>}
                        {contact[1].type !== 2 && <option value="2">Facebook</option>}
                        {contact[1].type !== 3 && <option value="3">Email</option>}
                        <option value="0">Kosong</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Kosong</option>
                        <option value="1">Whatsapp</option>
                        <option value="2">Facebook</option>
                        <option value="3">Email</option>
                      </>
                    )}
                  </Form.Control>
                  <Form.Control
                    name="kontak2"
                    ref={register()}
                    disabled={watch('checkKontak2') == 0 ? true : false}
                    defaultValue={contact[1] ? contact[1].url : ''}
                    placeholder={
                      watch('checkKontak2') == 1
                        ? '628xxxxxxxxx'
                        : watch('checkKontak2') == 2
                        ? 'Facebook username'
                        : watch('checkKontak2') == 3
                        ? 'your@email.com'
                        : ''
                    }
                  />
                  <Form.Control
                    className="mt-1"
                    name="userKontak2"
                    ref={register()}
                    defaultValue={contact[1] ? contact[1].name : ''}
                    placeholder="Nama tampilan"
                    disabled={watch('checkKontak2') == 0 ? true : false}
                  />
                </Form.Group>
                {/* Kontak 3 */}
                <Form.Group as={Col} controlId="check-kontak3">
                  <Form.Control as="select" name="checkKontak3" ref={register()} custom>
                    {contact[2] ? (
                      <>
                        <option value={contact[2].type}>
                          {contact[2].type == 1
                            ? 'Whatsapp'
                            : contact[2].type == 2
                            ? 'Facebook'
                            : contact[2].type == 3
                            ? 'Email'
                            : ''}
                        </option>
                        {contact[2].type !== 1 && <option value="1">Whatsapp</option>}
                        {contact[2].type !== 2 && <option value="2">Facebook</option>}
                        {contact[2].type !== 3 && <option value="3">Email</option>}
                        <option value="0">Kosong</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Kosong</option>
                        <option value="1">Whatsapp</option>
                        <option value="2">Facebook</option>
                        <option value="3">Email</option>
                      </>
                    )}
                  </Form.Control>
                  <Form.Control
                    name="kontak3"
                    defaultValue={contact[2] ? contact[2].url : ''}
                    ref={register()}
                    disabled={watch('checkKontak3') == 0 ? true : false}
                    placeholder={
                      watch('checkKontak3') == 1
                        ? '628xxxxxxxxx'
                        : watch('checkKontak3') == 2
                        ? 'Facebook username'
                        : watch('checkKontak3') == 3
                        ? 'your@email.com'
                        : ''
                    }
                  />
                  <Form.Control
                    className="mt-1"
                    name="userKontak3"
                    defaultValue={contact[2] ? contact[2].name : ''}
                    ref={register()}
                    placeholder="Nama tampilan"
                    disabled={watch('checkKontak3') == 0 ? true : false}
                  />
                </Form.Group>
                {/* Kontak 4 */}
                <Form.Group as={Col} controlId="check-kontak4">
                  <Form.Control as="select" name="checkKontak4" ref={register()} custom>
                    {contact[3] ? (
                      <>
                        <option value={contact[3].type}>
                          {contact[3].type == 1
                            ? 'Whatsapp'
                            : contact[3].type == 2
                            ? 'Facebook'
                            : contact[3].type == 3
                            ? 'Email'
                            : ''}
                        </option>
                        {contact[3].type !== 1 && <option value="1">Whatsapp</option>}
                        {contact[3].type !== 2 && <option value="2">Facebook</option>}
                        {contact[3].type !== 3 && <option value="3">Email</option>}
                        <option value="0">Kosong</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Kosong</option>
                        <option value="1">Whatsapp</option>
                        <option value="2">Facebook</option>
                        <option value="3">Email</option>
                      </>
                    )}
                  </Form.Control>
                  <Form.Control
                    name="kontak4"
                    ref={register()}
                    defaultValue={contact[3] ? contact[3].url : ''}
                    disabled={watch('checkKontak4') == 0 ? true : false}
                    placeholder={
                      watch('checkKontak4') == 1
                        ? '628xxxxxxxxx'
                        : watch('checkKontak4') == 2
                        ? 'Facebook username'
                        : watch('checkKontak4') == 3
                        ? 'your@email.com'
                        : ''
                    }
                  />
                  <Form.Control
                    className="mt-1"
                    name="userKontak4"
                    defaultValue={contact[3] ? contact[3].name : ''}
                    ref={register()}
                    placeholder="Nama tampilan"
                    disabled={watch('checkKontak4') == 0 ? true : false}
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
          </Card>
        </Row>
        <Row className="my-4 text-center">
          <Col>
            <Link to="/dashboard">
              <Button disabled={isLoading} variant="secondary">
                Kembali
              </Button>
            </Link>
            <Button disabled={isLoading} variant="success" type="submit" className="ml-2">
              Kirim
            </Button>
            {isLoading && (
              <>
                <span className="ml-2">Memproses data...</span> <Spinner variant="success" animation="border" />
              </>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default EditPropertyForm
