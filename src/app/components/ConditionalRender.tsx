import { PropsWithChildren } from "react";

interface ConditionalRenderProps {
    condition: boolean
}

const ConditionalRender = ({ condition, children }: PropsWithChildren<ConditionalRenderProps>) => {
    if(!condition) return null 

    return <>{children}</>
}

export default ConditionalRender;