import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'

import type { IUserLogin, IServerResponse, IUserRegister } from '../types/index.types'

export const fetchLogin = async ({ email, password }: IUserLogin) => {
  try {
    const result: IServerResponse = await (
      await fetch(`${process.env.ENDPOINT}/d/signin`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
    ).json()

    if (result.success === false) {
      return {
        success: false,
        msg: result.response.msg,
        errorCode: result.response.errorCode
      }
    }
    return {
      success: true,
      token: JSON.stringify(result.token).slice(1, -1)
    }
  } catch (err) {
    alert(err)
    return
  }
}

export const fetchRegister = async ({ email, password, repeatPassword, fullName }: IUserRegister) => {
  if (process.env.NODE_ENV === 'production' && !process.env.IS_RELEASE) {
    return {
      success: false,
      msg: 'you cannot register now. website is not released yet.',
      errorCode: 401
    }
  }

  const result: IServerResponse = await (
    await fetch(`${process.env.ENDPOINT}/d/signup`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        repeatPassword,
        fullName
      })
    })
  ).json()

  if (result.success === false) {
    return {
      success: false,
      msg: result.response.msg,
      errorCode: result.response.errorCode
    }
  }
  return {
    success: true,
    msg: result.response.msg
  }
}

const decode = (token: string) => {
  return jwt.verify(token, String(process.env.SECRET_KEY))
}

const setTokenIdentity = (token: string) => {
  cookies.set('exp_props', v4(), {
    expires: 1 / 48,
    secure: true
  }) // expire in 30 minutes
  localStorage.setItem('props', token)
}

export const fetchAllProperty = async () => {
  let result: any = '' || null
  try {
    if (!cookies.get('exp_props') || !localStorage.getItem('props')) {
      const data = await (await fetch(`${process.env.ENDPOINT}/v/property`)).json()
      const token = JSON.stringify(data).slice(1, -1)

      setTokenIdentity(token)
      result = decode(token)
      return result.property.map((prop: any) => prop)
    } else {
      result = decode(localStorage.getItem('props')!)
      return result.property.map((prop: any) => prop)
    }
  } catch (err) {
    console.error(err)
  }
}

export const fetchProvinsi = async () => {
  return await (await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')).json()
}

export const fetchKotaByProv = async (_: string, id: number) => {
  return await (await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)).json()
}

export const fetchAddProperty = async (formData: FormData) => {
  try {
    const json: IServerResponse = await (
      await fetch(`${process.env.ENDPOINT}/d/property`, {
        method: 'post',
        body: formData
      })
    ).json()
    return json
  } catch (err) {
    throw new Error(err)
  }
}

export const fetchPropertyByUserID = async (_: string, userId: string) => {
  try {
    return await (await fetch(`${process.env.ENDPOINT}/d/property/u/${userId}`)).json()
  } catch (err) {
    console.error(err)
  }
}

export const fetchPropertyById = async (_: string, propertyId: string) => {
  try {
    return await (await fetch(`${process.env.ENDPOINT}/d/property/${propertyId}`)).json()
  } catch (err) {
    console.error(err)
  }
}

export const fetchDeleteProperty = async (id: string) => {
  try {
    return await (
      await fetch(`${process.env.ENDPOINT}/d/property/${id}`, {
        method: 'delete'
      })
    ).json()
  } catch (err) {
    console.error(err)
  }
}

export const fetchUpdateProperty = async (formData: FormData) => {
  try {
    return await (
      await fetch(`${process.env.ENDPOINT}/d/property`, {
        method: 'put',
        body: formData
      })
    ).json()
  } catch (err) {
    throw new Error(err)
  }
}

export const fetchAddCertificate = async (formData: FormData) => {
  try {
    return await (
      await fetch(`${process.env.ENDPOINT}/d/certificate`, {
        method: 'post',
        body: formData
      })
    ).json()
  } catch (err) {
    throw new Error(err)
  }
}

export const fetchPropertySoldOut = async (id: string) => {
  try {
    return await (
      await fetch(`${process.env.ENDPOINT}/d/property/soldout`, {
        method: 'put',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
    ).json()
  } catch (err) {
    console.error(err)
  }
}

//? errorCode = 400:bad req, 401:unauthorized
