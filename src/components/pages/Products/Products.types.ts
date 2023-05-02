export type Product = {
  id: string
  name: string
  currency: string
  description: string
  price: number
  image: string
  quantity: number
  sort: string
  createDate: string
  updateDate: string
}

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
  list: Product[]
  meta: metaData
  query: queryData
}
