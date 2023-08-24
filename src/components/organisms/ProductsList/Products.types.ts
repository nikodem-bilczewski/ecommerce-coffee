interface imgUrl {
  data: {
    attributes: {
      url: string
    }
  }
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
    img: imgUrl
  }
}

export interface metaData {
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
