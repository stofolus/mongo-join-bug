import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const red = await payload.create({
    collection: 'colors',
    data: {
      name: 'Red',
    },
  })

  const blue = await payload.create({
    collection: 'colors',
    data: {
      name: 'Blue',
    },
  })

  const cars = await payload.create({
    collection: 'categories',
    data: {
      name: 'cars',
    },
  })

  const bikes = await payload.create({
    collection: 'categories',
    data: {
      name: 'bikes',
    },
  })

  await payload.create({
    collection: 'items',
    data: {
      name: 'Ferrari',
      color: red,
      category: cars,
    },
  })

  await payload.create({
    collection: 'items',
    data: {
      name: 'Harley Davidson',
      color: blue,
      category: bikes,
    },
  })

  return Response.json({ status: 'ok' })
}
