// type Product = {
//   id: number

//   name: string
//   currency: string
//   description: string
//   price: number
//   image: string
//   quantity: number
//   sort: string
//   createDate: string
//   updateDate: string
// }

interface metaData {
  pagination: {
    page: number
    pageCount: number
    total: number
    pageSize: string
  }
}

type queryData = {
  perPage: string
  page: number
}

export interface ProductsResponse {
  data: Product[]
  meta: metaData
}

export interface ProductResponse {
  data: Product
}

export interface Product {
  id: number
  attributes: {
    price: number
    publishedAt: string
    quantity: number
    title: string
    updatedAt: string
    createdAt: string
    currency: string
    description: string
    img: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}
