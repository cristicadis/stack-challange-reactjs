import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/fetch/fetchSlice";
import { useEffect } from "react";



const RetailSales = () => {
    const dispatch = useDispatch();
    const {retailSales} = useSelector((state) => state.data)

    useEffect(()=>{
        dispatch(fetchData())
    },[])

  
  return (
    <div className="retail-sales">
      asa dadsada
    </div>
  )
}

export default RetailSales
