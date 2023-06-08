import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooks = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooks> = ({status, updateStatus}) => {
    let [editMode, setEditMode] = useState<boolean>(false)
    let [statuses, setStatuses] = useState<string>(status)
    useEffect(() => {setStatuses(status)}, [status])
    const activateMode = () => setEditMode(true)
    const deActivateMode = () => {
        setEditMode(false)
        updateStatus(statuses)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {setStatuses(e.currentTarget.value)}
    return (
        <div>{!editMode &&
            <div>
                <b>Status:    </b>
                <span onDoubleClick={activateMode}>{status || "------"}</span>
            </div>}
            {editMode &&
                <input
                    onChange={onStatusChange}
                    placeholder={"Напиши свой статус"}
                    onBlur={deActivateMode}
                    autoFocus={true}
                    value={statuses}/>
            }
        </div>
    );
}


