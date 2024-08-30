import React from 'react';
import styles from '../../assets/styles/Admin/UserList.module.css';

const UserList = ({ users, onEdit, onDelete, onSelect }) => {
  return (
    <div className={styles.userList}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={(e) => {
                  if (e.target.checked) {
                    onSelect(users.map(user => user.id));
                  } else {
                    onSelect([]);
                  }
                }}
              />
            </th>
            <th>Profile Picture</th>
            <th>Username</th>
            <th>Email Address</th>
            <th>Access</th>
            <th>Last Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onSelect(prev => [...prev, user.id]);
                    } else {
                      onSelect(prev => prev.filter(id => id !== user.id));
                    }
                  }}
                />
              </td>
              <td><img src={user.profilePicture} alt="Profile" /></td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.access}</td>
              <td>{user.lastActive}</td>
              <td>
              <button className={styles.button} onClick={() => onEdit(user)}>Edit</button>
              <button className={styles.button} onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
