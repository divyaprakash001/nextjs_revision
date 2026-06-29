import { Product } from '@/components/product'
import { Reviews } from '@/components/review'
import { Suspense } from 'react'

export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<div>Loading product...</div>}>
                <Product />
            </Suspense>
            <Suspense fallback={<div>loading reviews...</div>}>
                <Reviews />
            </Suspense>
        </div>
    )
}

