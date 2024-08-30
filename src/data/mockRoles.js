const mockRoles = [
  {
    id: 1,
    name: 'Manager',
    description: 'Oversees team operations and has control over project management.',
    usersAssigned: ['Alice', 'Bob'],
    createdAt: '2023-05-01',
    permissions: ['Create', 'Read', 'Update', 'Delete'],
  },
  {
    id: 2,
    name: 'Administrator',
    description: 'Has full access to system settings and user management.',
    usersAssigned: ['Charlie', 'David'],
    createdAt: '2023-06-15',
    permissions: ['Create', 'Read', 'Update', 'Delete', 'Manage Users'],
  },
  {
    id: 3,
    name: 'Supervisor',
    description: 'Supervises tasks and ensures adherence to project timelines.',
    usersAssigned: ['Eve', 'Frank'],
    createdAt: '2023-07-20',
    permissions: ['Read', 'Update'],
  },
  {
    id: 4,
    name: 'Staff',
    description: 'Handles day-to-day operations with limited access to management tools.',
    usersAssigned: ['Grace', 'Heidi'],
    createdAt: '2023-08-05',
    permissions: ['Read', 'Update', 'Create'],
  },
  {
    id: 5,
    name: 'Member',
    description: 'Has access to basic functionalities and can view content.',
    usersAssigned: ['Ivan', 'Judy'],
    createdAt: '2023-09-10',
    permissions: ['Read'],
  }
];

export default mockRoles;
