import { useState } from 'react'

const GenericWrapper = hookFunction => (defaultVal, mapTupleToProps) => component => props => {
    return component({ ...props, ...mapTupleToProps(hookFunction(defaultVal)) });
}

const StateWrapper = GenericWrapper(useState);

export default StateWrapper