export async function getMasters() {
  const res = await fetch("http://localhost:3000/masters")
  return res.json()
}

export async function searchMasters(profession?: string, city?: string) {

  let url = "http://localhost:3000/masters?"

  if (profession) {
    url += `profession=${profession}&`
  }

  if (city) {
    url += `city=${city}`
  }

  const res = await fetch(url)

  return res.json()
}