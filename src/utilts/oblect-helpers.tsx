import React from 'react';

export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: any, newObjProps:any) => {
    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user
    })
};
