import { useEffect, useState } from "react"
import GiftArea from "./GiftArea"
import { AiOutlineShake } from "react-icons/ai"

const Shake = () => {
    const [gifts, setGifts] = useState([])
    const [selectedGift, setSelectedGift] = useState([])

    useEffect(() => {
        fetch("../../public/api/data.json").then(res => res.json()).then(data => setGifts(data.data))
    }, [])

    const getGift = () => {
        const number = Math.floor(Math.random() * (gifts.length))
        setSelectedGift(gifts[number])
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "20px", rowGap:"50px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AiOutlineShake size="200px" style={{ marginTop: "70px" }} color="#00713E" />
                <button className="shake-button" onClick={getGift}>Shake For Earn</button>
            </div>
            <GiftArea selectedGift={selectedGift} />
        </div>

    )
}

export default Shake