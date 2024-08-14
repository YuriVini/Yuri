
const ConditionalRender = ({ condition, children }) => {
    if(!condition) return null 

    return <>{children}</>
}

export default ConditionalRender;