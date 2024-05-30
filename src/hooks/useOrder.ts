import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    /* Generics 
        Son utiles cuando tienes un type mas complejo como OrderItem
        
        - en el caso: 'order' espera una estructura de tipo OrderItem
      
    */
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = ( item: MenuItem )=> {

        // returna el objeto que cumple con la condicion
        const itemExist = order.find( orderItem => orderItem.id === item.id );

        // Duplicado
        if (itemExist) {
            const newItem = {...itemExist};
            newItem.quantity++;
            const newOrder = order.map( orderItem => (orderItem.id === newItem.id) ? newItem : orderItem );
            setOrder(newOrder);
            
            return;
        }
        
        /* OrderItem:
            Puedes asignale a la variable que sea de tipo OrderItem para cerciorarte, pero no es necesario
        */
        const newItem : OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem]);
    }

    const removeItem = (id: MenuItem['id']) => {
        const newOrder = order.filter( orderItem => 
            orderItem.id !== id
        );

        setOrder(newOrder);
    }

    const placeOrder = ()=> {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,
    }
}