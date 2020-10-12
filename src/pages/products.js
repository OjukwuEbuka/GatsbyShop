import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProductLineGrid from "../components/productLineGrid"
import "../index.css"
import { 
    makeStyles,
    Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headFont: {
        fontFamily: ['Berkshire Swash', 'Roboto'],
        textAlign: 'center'
    }
}))

const ProductsPage = () => {
    const classes = useStyles()
    const N = (1).toLocaleString('en-NG', {style: 'currency', currency: 'NGN'})[0]
    const {allShopifyProduct} = useStaticQuery(graphql`
    query {
        allShopifyProduct(sort: { fields: [title]}){
            edges {
                node {
                    title
                    shopifyId
                    handle
                    images {
                        originalSrc
                        localFile {
                            childImageSharp {
                              fluid(maxWidth: 910) {
                                originalImg
                              }
                            }
                        }
                    }
                    priceRange {
                        minVariantPrice{
                            amount
                        }
                    }
                    description
                }
            }
        }
    }
`)

    return (
        <Layout>
            <div className="hero">
                <div className="hero-title">Tasty Cakes</div>
            </div>
            <h1 className={classes.headFont}>Best Selling Cakes</h1>
            <ProductLineGrid products={allShopifyProduct.edges} />

            <Box mt={4}>
                <h1 className={classes.headFont}>All of Our Wonderlicious Cakes</h1>
                <ul>
                    {allShopifyProduct.edges.map(({ node }) => (
                        <li key={node.shopifyId}>
                            <h3>
                                <Link to={`/product/${node.handle}`}>{node.title}</Link>
                                {" - "}{N + node.priceRange.minVariantPrice.amount}
                            </h3>
                            <p>{node.description}</p>
                        </li>
                    ))}
                </ul>
            </Box>
        </Layout>
    )
}

export default ProductsPage

// export const query = 