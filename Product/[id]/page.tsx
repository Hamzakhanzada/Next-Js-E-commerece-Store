import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCT = gql`
  query catalogItemProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        title
        description
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            price
            currency {
              code
            }
          }
        }
        primaryImage {
          URLs {
            medium
            original
          }
        }
      }
    }
  }
`;

const ProductComponent = ({ shopId, slugOrId }: { shopId: string, slugOrId: string }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { shopId, slugOrId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.catalogItemProduct.product;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.primaryImage.URLs.medium} alt={product.title} />
      {product.variants.map(variant    => (
        <div key={variant._id}>
          <h2>{variant.title}</h2>
          <p>{variant.attributeLabel}: {variant.optionTitle}</p>
          <p>{variant.pricing.displayPrice} {variant.pricing.currency.code}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
