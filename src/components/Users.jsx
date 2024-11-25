import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();

    const handleDeleteUser = (_id) => {
        console.log("Delete:", _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully");
                }
        })
    }
    return (
        <div>
            Users: {users.length}
            <div>
                {
                    users.map(user => <p key={user._id}>{user._id}: {user.name}, {user.email} <button onClick={() => handleDeleteUser(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;