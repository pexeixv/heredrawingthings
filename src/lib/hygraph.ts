import { GraphQLClient } from 'graphql-request'

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT
const token = import.meta.env.VITE_HYGRAPH_TOKEN

if (!endpoint) {
  throw new Error('VITE_HYGRAPH_ENDPOINT is not defined in environment variables')
}

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
})
