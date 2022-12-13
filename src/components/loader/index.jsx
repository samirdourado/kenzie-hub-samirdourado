import { BiEqualizer } from "react-icons/bi"
import { LoaderHolder } from "./style"

export function Loader() {
    return (
        <LoaderHolder>
            <BiEqualizer size="3rem" color="#ff577f" className="spinner"/>            
        </LoaderHolder>
    )
}