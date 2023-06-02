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

interface metaData {
  pagination: {
    page: number
    pageCount: number
    total: number
    pageSize: string
  }
}

export interface ProductsResponse {
  data: Product[]
  meta: metaData
}

export interface ProductResponse {
  data: Product
}
