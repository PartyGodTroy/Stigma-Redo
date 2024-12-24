import { extend } from "lodash"
import React from "react"
import { ReactDOM, PropsWithChildren } from "react"


export interface LayoutProps {}
export default function Layout( props: PropsWithChildren<LayoutProps> ){
    return <>
        <html>
            <head>
                
            </head>
            <body>
                {props.children}
            </body>
        </html>
    </>
}