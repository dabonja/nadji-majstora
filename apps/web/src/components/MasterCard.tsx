type Props = {
  name: string
  profession: string
  city: string
  phone: string
  rating: number
}

export default function MasterCard({
  name,
  profession,
  city,
  phone,
  rating
}: Props) {

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "12px"
    }}>
      
      <h3>{name}</h3>

      <p>{profession}</p>

      <p>📍 {city}</p>

      <p>⭐ {rating}</p>

      <p>📞 {phone}</p>

      <button>Pozovi</button>

    </div>
  )
}