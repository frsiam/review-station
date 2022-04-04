import { useEffect, useState } from "react"

const useCustomer = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCustomers(data))
    },[])
    return [customers, setCustomers];
}

export default useCustomer;