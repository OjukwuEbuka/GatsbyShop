import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import "../index.css"

const ProductsPage = ({ data }) => (
    <Layout>
        <div className="hero">
            <h2>Cakes</h2>
        </div>
        <h1>Products</h1>
        <ul>
            {data.allShopifyProduct.edges.map(({ node }) => (
                <li key={node.shopifyId}>
                    <h3>
                        <Link to={`/product/${node.handle}`}>{node.title}</Link>
                        {" - "}${node.priceRange.minVariantPrice.amount}
                    </h3>
                    <p>{node.description}</p>
                </li>
            ))}
        </ul>
    </Layout>
)

export default ProductsPage

export const query = graphql`
    {
        allShopifyProduct(sort: { fields: [title]}){
            edges {
                node {
                    title
                    shopifyId
                    handle
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
`