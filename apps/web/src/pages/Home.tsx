import { useEffect, useState } from "react"
import { getMasters, searchMasters } from "../services/api"
import MasterCard from "../components/MasterCard"

interface Master {
  id: string;
  name: string;
  profession: string;
  city: string;
  phone: string;
  rating: number;
}

export default function Home() {

  const [masters, setMasters] = useState<Master[]>([])
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");

  async function handleSearch() {
  const data = await searchMasters(profession, city)
  setMasters(data)
}

  useEffect(() => {
    getMasters().then(setMasters)
  }, [])

  return (
    <div style={{maxWidth: "800px", margin: "0 auto"}}>

      <h1>Nadji Majstora</h1>

      <p>Pronadji majstore u svom gradu</p>
    <div style={{
  marginBottom: "30px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px"
}}>
  <h2>Koji majstor vam treba?</h2>

  <div style={{display: "flex", gap: "10px"}}>

   <select onChange={(e) => setProfession(e.target.value)}>
  <option value="">Profesija</option>
  <option value="Vodoinstalater">Vodoinstalater</option>
  <option value="Električar">Električar</option>
</select>

<select onChange={(e) => setCity(e.target.value)}>
  <option value="">Grad</option>
  <option value="Beograd">Beograd</option>
  <option value="Novi Sad">Novi Sad</option>
</select>

<button onClick={handleSearch}>
  Pronadji
</button>

  </div>
</div>
      {masters.map((m: Master) => (
        <MasterCard
          key={m.id}
          name={m.name}
          profession={m.profession}
          city={m.city}
          phone={m.phone}
          rating={m.rating}
        />
      ))}

    </div>
  )
}