import { ProductType } from 'components/pages/Products/Products.types'

type metaData = {
  page: number
  pages: number
  totalCount: number
  perPage: string
}

type queryData = {
  perPage: string
  page: number
}

export type ProductResponse = {
  data: {
    list: ProductType[]
    meta: metaData
    query: queryData
  }
}
