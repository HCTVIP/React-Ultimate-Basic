import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user">
            <div className="title">
                 Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add</button>
                </div>
                <div>
                    table User
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;