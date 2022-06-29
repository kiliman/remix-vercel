import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  throw new Error('Oops!')
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  return json({})
}

export default function () {
  const data = useLoaderData()
  const actionData = useActionData()

  return <div>Hello</div>
}
