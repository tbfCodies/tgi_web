// src/data/rolesPermissions.js

const permissions = {
    // Forum-related permissions
    viewForum: "View Forum",
    createPost: "Create Post",
    editPost: "Edit Post",
    deletePost: "Delete Post",
    createForumCategory: "Create Forum Category",
    editForumCategory: "Edit Forum Category",
    deleteForumCategory: "Delete Forum Category",
  
    // User management permissions
    viewUserProfile: "View User Profile",
    editUserProfile: "Edit User Profile",
    viewManageUsers: "View UserManagement Page",
    addUser: "Add User",
    deleteUser: "Delete User",
    editUser: "Edit User",
    assignRolesToUsers: "Assign Roles to Users",
    deleteUsersRoles: "Delete Users Roles",
    manageRoles: "Manage Roles",
    viewRoles: "View Roles",
    createRoles: "Create Roles",
    editRoles: "Edit Roles",
    deleteRoles: "Delete Roles",
    changeRolePermissions: "Change Role Permissions",
  
    // Content management permissions
    approveContent: "Approve Content",
    pinPost: "Pin Post",
    manageMedia: "Manage Media", // Upload, edit, delete, view media
  
    // News management permissions
    createNews: "Create News",
    editNews: "Edit News",
    deleteNews: "Delete News",
    pinNews: "Pin News",
  
    // Appeals Permissions
    createAppeal: "Create Appeal",
    viewManageAppeals: "View ManageAppeals Page",
    viewAppeal: "View Appeal",
    editAppeal: "Edit Appeal",
    deleteAppeal: "Delete Appeal",
    assignAppeal: "Assign Appeal",
    changeAppealStatus: "Change Appeal Status",

    //Punishments Permissions
    viewManagePunishments: "View ManagePunishments Page",
    createPunishment: "Create Punishment",
    viewPunishment: "View Punishment",
    editPunishment: "Edit Punishment",
    deletePunishment: "Delete Punishment",
    assignPunishmentType: "Assign Punishment Type",
    addEvidence: "Add Evidence",
    editEvidence: "Edit Evidence",
    deleteEvidence: "Delete Evidence",
    commentOnPunishment: "Comment on Punishment",
    viewPunishmentReport: "View Punishment Report",
  
    // Ticket management
    createTicket: "Create Ticket",
    viewManageTickets: "View ManageTickets Page ",
    viewTicket: "View Ticket",
    respondTicket: "Respond to Ticket",
    changeTicketStatus: "Change Ticket Status",
    deleteTicket: "Delete Ticket",
    prioritizeTicket: "Prioritize Ticket",
  
    // Store management
    manageStore: "Manage Store",
    viewStore: "View Store",
    editStoreSettings: "Edit Store Settings",
    manageProducts: "Manage Products",
    changeProductPrice: "Change Product Price",
  
    // Administrative permissions
    accessAdminCP: "Access Admin Control Panel",
    editAdminSettings: "Edit Admin Settings",
    manageUsers: "Manage Users", // Aggregate permission for user management
    viewReports: "View Reports",
    manageAnnouncements: "Manage Announcements",
    viewLogs: "View Logs",
    configureSecurity: "Configure Security",
    manageAPIKeys: "Manage API Keys",
    scheduleMaintenance: "Schedule Maintenance",
    handleExternalIntegrations: "Handle External Integrations",
    viewLegalDocuments: "View Legal Documents",
    performSystemAudits: "Perform System Audits",
    manageBackup: "Manage Backup",
    manageAPIEndpoints: "Manage API Endpoints",
    
    // New permissions added based on request
    contentApproval: "Content Approval",
    themeManagement: "Theme Management",
    featureToggles: "Feature Toggles",
    supportTicketPriorityManagement: "Support Ticket Priority Management",
    massEmailing: "Mass Emailing",
    
    // Event and Poll Management
    createEvent: "Create Event",
    manageEvents: "Manage Events",
    participateInPolls: "Participate in Polls",
    createPoll: "Create Poll",
    
    // Miscellaneous
    sendAnnouncements: "Send Announcements",
    joinEvents: "Join Events",
    manageChats: "Manage Chats",
    manageReports: "Manage Reports",
    
    // Security and Compliance
    viewSecurityLogs: "View Security Logs",
    manageFirewallSettings: "Manage Firewall Settings",
    manageEncryptionKeys: "Manage Encryption Keys",
    manageAccessControlLists: "Manage Access Control Lists (ACLs)",
    viewPersonalDataRequests: "View Personal Data Requests",
    managePrivacySettings: "Manage Privacy Settings",
    manageGDPRRequests: "Manage GDPR Requests",
    manageCookieSettings: "Manage Cookie Settings",
  
    // API Management
    createAPIEndpoint: "Create API Endpoint",
    editAPIEndpoint: "Edit API Endpoint",
    deleteAPIEndpoint: "Delete API Endpoint",
    viewAPIUsage: "View API Usage",
    manageWebhooks: "Manage Webhooks",
    testAPIEndpoints: "Test API Endpoints",
    
    // Content Scheduling and Bulk Operations
    bulkDeleteContent: "Bulk Delete Content",
    bulkEditContent: "Bulk Edit Content",
    scheduleContentPublishing: "Schedule Content Publishing",
    
    // Training and Support
    manageHelpCenter: "Manage Help Center Content",
    createTrainingModules: "Create Training Modules",
  };
  
  const roles = {
    Member: {
      permissions: [
        permissions.viewForum,
        permissions.viewUserProfile,
        permissions.createAppeal,
        permissions.viewAppeal,
        permissions.createPunishment,
        permissions.viewPunishment,
        permissions.participateInPolls,
        permissions.joinEvents,
      ],
    },
    Staff: {
      permissions: [
        permissions.viewForum,
        permissions.createPost,
        permissions.editPost,
        permissions.deletePost,
        permissions.createForumCategory,
        permissions.editForumCategory,
        permissions.deleteForumCategory,
        permissions.viewUserProfile,
        permissions.editUserProfile,
        permissions.manageReports,
        permissions.manageChats,
        permissions.createPoll,
        permissions.sendAnnouncements,
        permissions.manageUsers,
        permissions.viewAppeal,
        permissions.createTicket,
        permissions.viewTicket,
        permissions.respondTicket,
        permissions.changeTicketStatus,
        permissions.createAppeal,
        permissions.assignAppeal,
        permissions.changeAppealStatus,
        permissions.createPunishment,
        permissions.editPunishment,
        permissions.deletePunishment,
        permissions.assignPunishmentType,
        permissions.addEvidence,
        permissions.commentOnPunishment,
        permissions.viewPunishmentReport,
      ],
    },
    Supervisor: {
      permissions: [
        permissions.viewForum,
        permissions.createPost,
        permissions.editPost,
        permissions.deletePost,
        permissions.createForumCategory,
        permissions.editForumCategory,
        permissions.deleteForumCategory,
        permissions.manageMedia,
        permissions.viewUserProfile,
        permissions.editUserProfile,
        permissions.addUser,
        permissions.deleteUser,
        permissions.editUser,
        permissions.assignRolesToUsers,
        permissions.deleteUsersRoles,
        permissions.manageRoles,
        permissions.viewRoles,
        permissions.createRoles,
        permissions.editRoles,
        permissions.deleteRoles,
        permissions.changeRolePermissions,
        permissions.viewAppeal,
        permissions.editAppeal,
        permissions.deleteAppeal,
        permissions.assignAppeal,
        permissions.changeAppealStatus,
        permissions.createPunishment,
        permissions.editPunishment,
        permissions.deletePunishment,
        permissions.assignPunishmentType,
        permissions.addEvidence,
        permissions.editEvidence,
        permissions.deleteEvidence,
        permissions.commentOnPunishment,
        permissions.viewPunishmentReport,
        permissions.createEvent,
        permissions.manageEvents,
        permissions.manageUsers,
        permissions.accessAdminCP,
        permissions.viewAdminDashboard,
        permissions.editAdminSettings,
        permissions.viewReports,
        permissions.manageAnnouncements,
        permissions.viewLogs,
        permissions.configureSecurity,
        permissions.manageAPIKeys,
        permissions.scheduleMaintenance,
        permissions.handleExternalIntegrations,
        permissions.viewLegalDocuments,
        permissions.performSystemAudits,
        permissions.manageBackup,
        permissions.manageAPIEndpoints,
        permissions.contentApproval,
        permissions.themeManagement,
        permissions.featureToggles,
        permissions.supportTicketPriorityManagement,
        permissions.massEmailing,
        permissions.manageGDPRRequests,
        permissions.manageCookieSettings,
        permissions.manageHelpCenter,
        permissions.createTrainingModules,
      ],
    },
    Manager: {
      permissions: Object.values(permissions), // Fullständig åtkomst
    },
    Administrator: {
      permissions: Object.values(permissions), // Fullständig åtkomst
    },
  };
  
  export { roles, permissions };
  