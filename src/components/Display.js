import React from "react";
import "./style.css"
function DispalyUserData({ userInfo }) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                {userInfo.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} alt="" /> </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default DispalyUserData;