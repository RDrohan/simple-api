import fetch from 'node-fetch'

const baseURL = 'https://anapioficeandfire.com/api/'

const get = async path => {
  const response = await fetch(`${baseURL}${path}`)
  return await response.json()
}

export default get
