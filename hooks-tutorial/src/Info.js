import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    return {
        ...state,
        [action.name] : action.value,
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    })

    const {name, nickname} = state;
    const onChangeState = e => dispatch(e.target)



    return(<div>
        <div>
            <input name='name' value={name} onChange={onChangeState} />
            <input name='nickname' value={nickname} onChange={onChangeState} />
        </div>
        <div>
            <p>이름 : {name}</p>
            <p>별명 : {nickname}</p>
        </div>
    </div>)
}

export default Info;