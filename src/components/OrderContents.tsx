import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

function OrderContents({order, removeItem }: OrderContentsProps) {
  return (
    <div>

        <div className="space-y-3 h-96 overflow-y-auto">
            {order.map( item => 
                <div key={item.id} className="flex justify-between items-center py-4 border-t border-gray-200 last:border-b">
                    <div>
                        <p className="text-lg ">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>

                    <button 
                        className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                        onClick={()=> removeItem(item.id)}
                    >
                        x
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default OrderContents;