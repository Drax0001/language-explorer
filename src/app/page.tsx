"use client"

import axios from "axios"
// import Image from "next/image"
import { useEffect } from "react"

export default function Home() {
  // const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all")

      console.log("response: ", res.data)
    }

    fetchCountries()
  }, [])

  // console.log(countries)
  return (
    <main>
      {/* <p>{JSON.stringify(countries)}</p> */}

      <p>Landing page</p>
    </main>
  )
}
