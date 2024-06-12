/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetProducts ($tagIds: [ID!]) {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes { \n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  \n    catalogItems(\n      shopIds: [\"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\"]\n      tagIds: $tagIds\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              pricing {\n                displayPrice\n              }\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        } \n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        primaryImage {\n          URLs {\n            small\n            medium\n            large\n            original\n            thumbnail\n\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts ($tagIds: [ID!]) {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes { \n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  \n    catalogItems(\n      shopIds: [\"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\"]\n      tagIds: $tagIds\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              pricing {\n                displayPrice\n              }\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        } \n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts ($tagIds: [ID!]) {\n    tags(shopId: \"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\") {\n      nodes { \n        _id\n        name\n        displayTitle\n        slug\n      }\n    }\n  \n    catalogItems(\n      shopIds: [\"cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==\"]\n      tagIds: $tagIds\n    ) {\n      edges {\n        node {\n          ... on CatalogItemProduct {\n            product {\n              title\n              slug\n              pricing {\n                displayPrice\n              }\n              description\n              _id\n              variants {\n                _id\n                title\n                media {\n                  URLs {\n                    small\n                  }\n                }\n              }\n            }\n          }\n        } \n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        primaryImage {\n          URLs {\n            small\n            medium\n            large\n            original\n            thumbnail\n\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($shopId: ID!, $slugOrId: String!) {\n    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {\n      product {\n        _id\n        title\n        description\n        primaryImage {\n          URLs {\n            small\n            medium\n            large\n            original\n            thumbnail\n\n          }\n        }\n        variants {\n          _id\n          title\n          attributeLabel\n          optionTitle\n          pricing {\n            displayPrice\n            currency {\n              code\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;