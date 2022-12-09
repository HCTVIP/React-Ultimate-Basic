import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';


const TableUserPaginate = (props) => {

    const { listUsers, pageCount } = props;

    const handlePageClick = (event) => {
      props.setCurrentPage(+event.selected + 1);
      props.fetchListUsersWithPaginate(+event.selected + 1);
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button 
                                        className="btn btn-warning mx-3"
                                        onClick={() => props.handleClickBtnUpdate(user)}
                                    >
                                        Update
                                    </button>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => props.handleClickBtnDelete(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                    {listUsers && listUsers.length === 0 && 
                    <tr>
                        <td colSpan={'4'}> Not found Data</td>
                    </tr>} 
                </tbody>
            </table>
            <div className="user-pagination">
                <ReactPaginate
                  nextLabel="Next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< Pre"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                  forcePage={props.currentPage - 1}
              />
            </div>
        </>
    )
}




export default TableUserPaginate;