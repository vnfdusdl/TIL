import { useState, useEffect } from 'react';
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(()=>{
        console.log("렌더링이 완료되었습니다.")
        console.log({
            name, 
            nickname
        })
        return () => {
            console.log('cleanUp')
            console.log(name)
        }
    },[name])

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(<div>
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
            <p>이름 : {name}</p>
            <p>별명 : {nickname}</p>
        </div>
    </div>)
}

export default Info;