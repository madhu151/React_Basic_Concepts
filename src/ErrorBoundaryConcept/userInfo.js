import React from 'react';

function UserInfo(prop) {
    console.log(prop)
    if (prop.name === 'manvy') {
        throw 'errpr'
    }
    return (
        <div>
            {prop.name}
        </div>
    )
}

export default UserInfo;
