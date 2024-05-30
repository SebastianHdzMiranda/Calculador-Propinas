import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: ()=> void
}


function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subTotalAmout = useMemo( ()=> order.reduce( (total, orderItem)=> total + (orderItem.price*orderItem.quantity), 0), [order]);
    const tipAmount = useMemo( ()=> subTotalAmout * tip, [tip, order] );
    const totalAmount = useMemo(()=> subTotalAmout+tipAmount , [tipAmount, order]);
    
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>

                <p>Subtotal a pagar:{' '}
                    <span className="font-bold">{formatCurrency(subTotalAmout)}</span>
                </p>            
                <p>Propina:{' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>            
                <p>Total a Pagar:{' '}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>            
            </div> 

            <button 
                className="bg-black text-white w-full p-3 font-bold uppercase disabled:opacity-10"
                disabled={order.length === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals