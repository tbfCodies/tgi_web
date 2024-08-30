import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../assets/styles/Admin/AppealsPage.module.css';
import { mockAppeals, assignedToUsers, mockServices } from '../../data/mockAppeals';

const AppealsList = ({ statusFilter }) => {
  const [appeals, setAppeals] = useState(mockAppeals);
  const [selectedAppeal, setSelectedAppeal] = useState(null);
  const [sortFilter, setSortFilter] = useState('Sort By');
  const [searchQuery, setSearchQuery] = useState('');
  const [editedAppeal, setEditedAppeal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const appealsPerPage = 6;

  const router = useRouter();

  const colorMapping = {
    'Accepted': 'green',
    'Pending': 'yellow',
    'Denied': 'red',
    'New': 'blue',
  };

  useEffect(() => {
    setSortFilter('Sort By');
    setSelectedAppeal(null);
    setAppeals(mockAppeals);
  }, [router.asPath]);

  const filteredAppeals = appeals
    .filter((appeal) => {
      const statusMatches = statusFilter === 'All' || appeal.status === statusFilter;

      const today = new Date();
      let sortMatches = true;
      if (sortFilter === 'Today') {
        sortMatches = new Date(appeal.postedAt).toDateString() === today.toDateString();
      } else if (sortFilter === 'This Week') {
        const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        sortMatches = new Date(appeal.postedAt) >= firstDayOfWeek && new Date(appeal.postedAt) <= lastDayOfWeek;
      } else if (sortFilter === 'This Month') {
        sortMatches = new Date(appeal.postedAt).getMonth() === today.getMonth() && new Date(appeal.postedAt).getFullYear() === today.getFullYear();
      }

      const searchMatches = searchQuery.trim() === '' || appeal.title.toLowerCase().includes(searchQuery.toLowerCase());

      return statusMatches && sortMatches && searchMatches;
    });

  const sortedAppeals = filteredAppeals.sort((a, b) => {
    if (sortFilter === 'Today' || sortFilter === 'This Week' || sortFilter === 'This Month') {
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
    return 0;
  });

  const indexOfLastAppeal = currentPage * appealsPerPage;
  const indexOfFirstAppeal = indexOfLastAppeal - appealsPerPage;
  const currentAppeals = sortedAppeals.slice(indexOfFirstAppeal, indexOfLastAppeal);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedAppeals.length / appealsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleOpenAppeal = (appeal) => {
    setSelectedAppeal(appeal);
    setEditedAppeal({ ...appeal });
  };

  const handleClosePopup = () => {
    setSelectedAppeal(null);
    setEditedAppeal(null);
  };

  const handleSaveChanges = () => {
    if (editedAppeal) {
      setAppeals((prevAppeals) =>
        prevAppeals.map((appeal) =>
          appeal.id === editedAppeal.id ? { ...editedAppeal } : appeal
        )
      );
      handleClosePopup();
    }
  };

  const handleStatusChange = (e) => {
    setEditedAppeal((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleAssignedToChange = (e) => {
    setEditedAppeal((prev) => ({ ...prev, assignedTo: e.target.value }));
  };

  const handleServiceChange = (e) => {
    setEditedAppeal((prev) => ({ ...prev, service: e.target.value }));
  };

  const handleReasonForBanChange = (e) => {
    setEditedAppeal((prev) => ({ ...prev, reasonForBan: e.target.value }));
  };

  const handleProofChange = (e) => {
    const { name, value } = e.target;
    setEditedAppeal((prev) => ({
      ...prev,
      proof: {
        ...prev.proof,
        [name]: value
      }
    }));
  };

  return (
    <div className={styles.appealsContainer}>
      <div className={styles.searchSortContainer}>
        <input
          type="text"
          placeholder="Search appeals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBox}
        />
        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}
          className={styles.sortDropdown}
        >
          <option value="Sort By">Sort By</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>
      </div>

      {currentAppeals.length === 0 ? (
        <p className={styles.noAppealsMessage}>No appeals to show at this moment</p>
      ) : (
        <div className={styles.appealsList}>
          {currentAppeals.map((appeal) => (
            <div key={appeal.id} className={styles.appealItem}>
              <div className={styles.colorBox} style={{ backgroundColor: colorMapping[appeal.status] }}></div>
              <div className={styles.appealDetails}>
                <span className={styles.appealText}>Appeal ID #{appeal.id}</span>
                <span className={styles.appealText}>
                  Created By <span className={styles.grayedText}>{appeal.createdBy}</span>
                </span>
                <span className={styles.appealText}>
                  Service <span className={styles.grayedText}>{appeal.service}</span>
                </span>
                <span className={styles.appealText}>
                  Assigned To <span className={styles.grayedText}>{appeal.assignedTo}</span>
                </span>
                <span className={styles.appealText}>
                  Posted At <span className={styles.grayedText}>{new Date(appeal.postedAt).toLocaleDateString()}</span>
                </span>
                <button
                  className={styles.openAppealButton}
                  onClick={() => handleOpenAppeal(appeal)}
                >
                  Open Appeal
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`${styles.pageButton} ${currentPage === number ? styles.activePage : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>

      {selectedAppeal && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              Close
            </button>
            <h2>Appeal ID #{selectedAppeal.id}</h2>
            <p><strong>Created By:</strong> {editedAppeal?.createdBy}</p>
            <p><strong>Posted At:</strong> {new Date(editedAppeal?.postedAt).toLocaleDateString()}</p>
            <p>
              <strong>Service:</strong>
              <select value={editedAppeal?.service} onChange={handleServiceChange}>
                {mockServices.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </p>
            <p>
              <strong>Assigned To:</strong>
              <select value={editedAppeal?.assignedTo} onChange={handleAssignedToChange}>
                {assignedToUsers.map((user) => (
                  <option key={user.id} value={user.username}>{user.username}</option>
                ))}
              </select>
            </p>
            <p>
              <strong>Status:</strong>
              <select value={editedAppeal?.status} onChange={handleStatusChange}>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Denied">Denied</option>
              </select>
            </p>
            <p>
              <strong>Reason for Ban:</strong>
              <input
                type="text"
                value={editedAppeal?.reasonForBan || ''}
                onChange={handleReasonForBanChange}
                className={styles.proofTextInput}
              />
            </p>
            <div className={styles.proofSection}>
              <p className={styles.proofText}>Proof: {editedAppeal?.proof?.text}</p>
              <div className={styles.proofImages}>
                {editedAppeal?.proof?.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Proof ${idx + 1}`} className={styles.proofImage} />
                ))}
              </div>
              <div className={styles.proofVideos}>
                {editedAppeal?.proof?.videos.map((vid, idx) => (
                  <video key={idx} src={vid} controls className={styles.proofVideo}></video>
                ))}
              </div>
            </div>
            <div className={styles.statusButtons}>
              <button onClick={handleSaveChanges}>Save Changes</button>
              <button onClick={handleClosePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppealsList;
