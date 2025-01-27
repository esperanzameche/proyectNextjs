import Image from 'next/image'
import styles from './MainProducts.module.sass'
import {product} from '@/app/Type/definition';


const getProducts=async()=>{
    try{
        const response= await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`,{
            headers: new Headers({
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ||""
            })
        })

        const {products}= await response.json()
        return products

    } catch (error){
        console.log(error)
    }
    
}

export const MainProducts= async()=>{
    const products= await getProducts()
    console.log(products)
    return(
        <section className={styles.MainProducts}>
            <h3> New Products released!</h3>
            <div className={styles.MainProducts__grid}>
                {products?.map((product)=>{
                    const imageSrc= product.images[0].src;
                    return(
                        <div className={styles.MainProducts__item}>
                            <article key={product.id}>
                                <p>{product.title}</p>
                                <div className={styles.MainProducts__imageContainer}>
                                    <Image src={imageSrc} fill alt={product.title} loading="eager"/>
                                </div>
                            </article>
                        </div>  
                    );
                })}
            </div>
        </section>
    );
}