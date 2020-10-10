const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for all shop products

    const result = await graphql(`
        query {
            allShopifyProduct(sort: {fields: [title]}){
                edges {
                    node {
                        title
                        images {
                            originalSrc
                        }
                        shopifyId
                        handle
                        description
                        availableForSale
                        priceRange {
                            maxVariantPrice {
                                amount
                            }
                            minVariantPrice {
                                amount
                            }
                        }
                    }
                }
            }
        }
    `)

    // Iterate over all procucts and create new page using the product "handle"
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
        createPage({
            path: `/product/${node.handle}`,
            component: path.resolve(`./src/templates/product.js`),
            context: {
                product: node,
            },
        })
    })
}