import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
type DialogsType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[]
}

type dialogsDataType = {
    id: number,
    name: string
}
type messagesDataType = {
    message: string
}
export const Dialogs = (props:DialogsType) => {
    // let dialogsData = [
    //     {id: 1, name: 'Lui'},
    //     {id: 2, name: 'Endi'},
    //     {id: 3, name: 'Bob'},
    //     {id: 4, name: 'Monika'},
    // ]
    // let messagesData = [
    //     {message: 'Hello'},
    //     {message: 'How is your'},
    //     {message: 'Hi-hi'},
    // ]

    let dialogsElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messagesData.map(m => <Message message={m.message}/>)
    let onClickHandler=()=>{
        let text=newMessageElement.current.value
        alert(text)
    }
    let newMessageElement:any=React.createRef()
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {/*<img src={ava_dialogs_1} alt="ava_dialogs_1"/>*/}
                {/*{ava}*/}

                {dialogsElement}
                <div><textarea ref={newMessageElement}/></div>
                <button onClick={onClickHandler}>Add message</button>
                {/*<DialogItem name={'Lui'} id={1}/>*/}
                {/*<DialogItem name={'Endi'} id={2}/>*/}
                {/*<DialogItem name={'Bob'} id={3}/>*/ }
                {/*<DialogItem name={'Monika'} id={4}/>*/}
            </div>
            <div className={style.messages}>
                {messagesElement}
                {/*<Message message={'Hello'}/>*/}
                {/*<Message message={'How is your'}/>*/}
                {/*<Message message={'Hi-hi'}/>*/}
            </div>
        </div>
    );
};

