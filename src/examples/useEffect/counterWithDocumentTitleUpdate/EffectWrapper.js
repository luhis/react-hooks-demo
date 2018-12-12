import { useEffect } from 'react'

const a = effectFuc => component => props => {
    useEffect(() => effectFuc(props));
    return component(props);
}

export default a;