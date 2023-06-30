'use client'

import './globals.css'
import Layout from './layout/index'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {

    const client = new ApolloClient({
        cache: new InMemoryCache(), // 开启缓存，Apollo 客户端在获取查询结果后使用它来缓存查询结果。
        uri: 'https://dev-backend.rabidadmin.com/graphql', // uri指定我们的 GraphQL 服务器的 URL。
    });

    return (
        <html lang="en">
        <body>
        <ApolloProvider client={client}>
            <Layout>{children}</Layout>
        </ApolloProvider>
        </body>
        </html>
    )
}
