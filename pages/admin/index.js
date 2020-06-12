import Layout from '../../components/admin/Layout.js'
import HeaderTitle from '../../components/admin/HeaderTitle.js'
import React from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { handleAuthSSR } from '../../utils/auth'

export default function Index(props) {

    const cookies = new Cookies()
    const serverUrl = 'https://hcodelab-hamburgueria.herokuapp.com'

    return (
        <Layout>

            <HeaderTitle text="Área administrativa" />

        </Layout>
    )

}

Index.getInitialProps = async (ctx) => {
    const res = await handleAuthSSR(ctx)
    return { "res" : res}
}