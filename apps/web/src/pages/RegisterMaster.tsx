import { useState } from "react"
import { Box, Input, Button, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import type { Master } from "../services/mockMasters"

interface Props {
  masters: Master[]
  setMasters: React.Dispatch<React.SetStateAction<Master[]>>
}

const RegisterMaster = ({ masters, setMasters }: Props) => {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [profession,setProfession] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")
  const [experience,setExperience] = useState("")

  const handleSubmit = () => {

    const newMaster: Master = {
      id: masters.length + 1,
      name,
      profession,
      phone,
      city,
      experience: Number(experience),
      rating: 0,
      reviews: 0,
      image: `https://i.pravatar.cc/150?u=${name}`
    }

    setMasters(prev => [...prev, newMaster])

    navigate("/")
  }

  return (
    <Box maxW="500px" mx="auto" mt={10}>
      <VStack spacing={4}>

        <Input placeholder="Ime firme / majstora" onChange={e=>setName(e.target.value)} />

        <Input placeholder="Profesija (električar, vodoinstalater...)" onChange={e=>setProfession(e.target.value)} />

        <Input placeholder="Grad" onChange={e=>setCity(e.target.value)} />

        <Input placeholder="Telefon" onChange={e=>setPhone(e.target.value)} />

        <Input placeholder="Godine iskustva" onChange={e=>setExperience(e.target.value)} />

        <Button colorScheme="blue" onClick={handleSubmit}>
          Registruj se kao majstor
        </Button>

      </VStack>
    </Box>
  )
}

export default RegisterMaster