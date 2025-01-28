import styles from '../../../../../MainProducts.module.sass';

const getProducts = async () => {
    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-01/products.json`, {
            headers: new Headers({
                'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
            })
        })

        const { products } = await response.json()
        return products

    } catch (error) {
        console.log(error)
    }

}

export const MainProducts = async () => {
    const products = await getProducts()
    console.log(products)
    return (
        <section className={styles.MainProducts}>
            <h3> New Products released!</h3>
            <div className={styles.MainProducts__parent}>
                {products?.map((product: any) => {
                    const imageSrc = product.images[0].src;
                    return (
                        <div key={product.id} className={styles.MainProducts__item}>
                            <p style={{borderRadius: "20px"}}>{product.title}</p>
                            <img style={{borderRadius: "20px"}} src={imageSrc} alt={product.title} loading="eager" width="180px" height="180px" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}