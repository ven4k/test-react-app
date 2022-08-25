import { useEffect, useState } from "react";
export const SingleItem = () => {
    const [singleItem, setSingleItem] = useState<any>({});
    useEffect(() => {
        fetch('https://boiling-refuge-66454.herokuapp.com/images/237')
            .then(response => response.json())
            .then(result => setSingleItem(result))
    }, [])


    return (
        <div>
            <div key={singleItem.id}><img src={singleItem.url} alt='choosed item' /></div>
        </div>
    )
}