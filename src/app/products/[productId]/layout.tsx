import React, { ReactNode } from 'react'

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}


function ProductDetailLayout({ children }: { children: ReactNode }) {
    const random = getRandomInt(2);
    if (random == 1) {
        throw new Error("Error loading product with id")
    }
    return (
        <div>
            {children}
            <h2>Featured products</h2>
        </div>
    )
}

export default ProductDetailLayout
