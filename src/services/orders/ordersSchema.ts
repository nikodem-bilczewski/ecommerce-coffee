/* eslint-disable camelcase */
import { array, number, object, string } from 'zod'

export const cartProductSchema = object({
  title: string(),
  price: number(),
  quantity: number(),
  total: number(),
  img: string(),
})

const orderAttributesSchema = object({
  total: number(),
  createdAt: string(),
  updatedAt: string(),
  publishedAt: string(),
  user_id: number(),
  date: string(),
  products: array(cartProductSchema),
  currency: string(),
})

export const orderSchema = object({
  id: number(),
  attributes: orderAttributesSchema,
})

const metaDataSchema = object({
  pagination: object({
    page: number(),
    pageSize: number(),
    pageCount: number(),
    total: number(),
  }),
})

export const ordersResponseSchema = object({
  data: array(orderSchema),
  meta: metaDataSchema,
})

export const orderResponseSchema = object({
  data: orderSchema,
  meta: object({}),
})
