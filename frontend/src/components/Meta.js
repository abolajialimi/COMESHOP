import React from 'react'
import { Helmet } from "react-helmet"
const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>

            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )


}


Meta.defaultProps ={

    title: 'Welcome To Comeshop',
    description: 'We sell  active and exclusive wears ',
    keywords: 'fashion, athletics, exclusive jerseys'
}
export default Meta

  