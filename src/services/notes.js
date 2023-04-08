import axios from 'axios'

const getAll = async () => {
  const response = await axios.get(`${process.env.VITE_BACKEND_URL}/notes`)

  return response.data
}

const create = async (content) => {
  const object = { content, important: false }

  const url = `${process.env.VITE_BACKEND_URL}/notes`

  const response = await axios.post(url, object)

  return response.data
}

const update = async (id, note) => {
  const response = await axios.put(
    `${process.env.VITE_BACKEND_URL}/notes/${id}`,
    note
  )

  return response.data
}

export default { getAll, create, update }
