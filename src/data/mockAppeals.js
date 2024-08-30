const createByUsers = [
    { id: 1, username: 'GamerHax0r1337' },
    { id: 2, username: 'mcFartAlot' },
    { id: 3, username: 'mcMacaroniStew' },
    { id: 4, username: 'MissPigglet' },
    { id: 5, username: 'LittleMrKnowEverything' },
    { id: 7, username: 'GamerHax0r1337' },
    { id: 8, username: 'mcFartAlot' },
    { id: 9, username: 'mcMacaroniStew' },
    { id: 10, username: 'MissPigglet' },
    { id: 11, username: 'LittleMrKnowEverything' },
    { id: 12, username: 'GamerHax0r1337' },
    { id: 13, username: 'mcFartAlot' },
    { id: 14, username: 'mcMacaroniStew' },
    { id: 15, username: 'MissPigglet' },
    { id: 16, username: 'LittleMrKnowEverything' }
];

const assignedToUsers = [
    { id: 17, username: 'Codies' },
    { id: 18, username: 'Teffe' },
    { id: 19, username: 'NoWay' },
    { id: 20, username: 'Codies' },
    { id: 21, username: 'Teffe' },
    { id: 22, username: 'NoWay' },
    { id: 23, username: 'Codies' },
    { id: 24, username: 'Teffe' },
    { id: 25, username: 'NoWay' }
];

const mockServices = ['Service A', 'Service B', 'Service C', 'Service D', 'Service E'];

const mockAppeals = [
    {
        id: 1,
        status: 'Accepted',
        createdBy: createByUsers[0].username,  // GamerHax0r1337
        service: 'Service A',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-08-22T00:00:00Z',
        date: new Date('2024-08-15T00:45:00'),
        reasonForBan: 'Inappropriate behavior',
        proof: {
            text: 'Screenshot of the incident',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 2,
        status: 'Pending',
        createdBy: createByUsers[1].username,  // mcFartAlot
        service: 'Service B',
        assignedTo: assignedToUsers[1].username,  // Teffe
        postedAt: '2024-03-22T00:00:00Z',
        date: new Date('2024-08-15T13:15:00'),
        reasonForBan: 'Cheating',
        proof: {
            text: 'Link to evidence',
            images: [],
            videos: []
        }
    },
    {
        id: 3,
        status: 'Denied',
        createdBy: createByUsers[2].username,  // mcMacaroniStew
        service: 'Service C',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-05-15T00:00:00Z',
        date: new Date('2024-08-10T10:30:00'),
        reasonForBan: 'Harassment',
        proof: {
            text: 'Chat logs',
            images: ['https://via.placeholder.com/150'],
            videos: []
        }
    },
    {
        id: 4,
        status: 'New',
        createdBy: createByUsers[3].username,  // MissPigglet
        service: 'Service D',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-06-01T00:00:00Z',
        date: new Date('2024-08-12T14:00:00'),
        reasonForBan: 'Spamming',
        proof: {
            text: 'Multiple spam reports',
            images: [],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 5,
        status: 'Pending',
        createdBy: createByUsers[4].username,  // LittleMrKnowEverything
        service: 'Service E',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-07-20T00:00:00Z',
        date: new Date('2024-08-14T09:00:00'),
        reasonForBan: 'Exploiting bugs',
        proof: {
            text: 'Bug exploitation video',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: []
        }
    },
    {
        id: 6,
        status: 'Accepted',
        createdBy: createByUsers[0].username,  // GamerHax0r1337
        service: 'Service A',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-08-22T00:00:00Z',
        date: new Date('2024-08-15T00:45:00'),
        reasonForBan: 'Inappropriate behavior',
        proof: {
            text: 'Screenshot of the incident',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 7,
        status: 'Pending',
        createdBy: createByUsers[1].username,  // mcFartAlot
        service: 'Service B',
        assignedTo: assignedToUsers[1].username,  // Teffe
        postedAt: '2024-03-22T00:00:00Z',
        date: new Date('2024-08-15T13:15:00'),
        reasonForBan: 'Cheating',
        proof: {
            text: 'Link to evidence',
            images: [],
            videos: []
        }
    },
    {
        id: 8,
        status: 'Denied',
        createdBy: createByUsers[2].username,  // mcMacaroniStew
        service: 'Service C',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-05-15T00:00:00Z',
        date: new Date('2024-08-10T10:30:00'),
        reasonForBan: 'Harassment',
        proof: {
            text: 'Chat logs',
            images: ['https://via.placeholder.com/150'],
            videos: []
        }
    },
    {
        id: 9,
        status: 'New',
        createdBy: createByUsers[3].username,  // MissPigglet
        service: 'Service D',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-06-01T00:00:00Z',
        date: new Date('2024-08-12T14:00:00'),
        reasonForBan: 'Spamming',
        proof: {
            text: 'Multiple spam reports',
            images: [],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 10,
        status: 'Pending',
        createdBy: createByUsers[4].username,  // LittleMrKnowEverything
        service: 'Service E',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-07-20T00:00:00Z',
        date: new Date('2024-08-14T09:00:00'),
        reasonForBan: 'Exploiting bugs',
        proof: {
            text: 'Bug exploitation video',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: []
        }
    },
    {
        id: 11,
        status: 'Accepted',
        createdBy: createByUsers[0].username,  // GamerHax0r1337
        service: 'Service A',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-08-22T00:00:00Z',
        date: new Date('2024-08-15T00:45:00'),
        reasonForBan: 'Inappropriate behavior',
        proof: {
            text: 'Screenshot of the incident',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 12,
        status: 'Pending',
        createdBy: createByUsers[1].username,  // mcFartAlot
        service: 'Service B',
        assignedTo: assignedToUsers[1].username,  // Teffe
        postedAt: '2024-03-22T00:00:00Z',
        date: new Date('2024-08-15T13:15:00'),
        reasonForBan: 'Cheating',
        proof: {
            text: 'Link to evidence',
            images: [],
            videos: []
        }
    },
    {
        id: 13,
        status: 'Denied',
        createdBy: createByUsers[2].username,  // mcMacaroniStew
        service: 'Service C',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-05-15T00:00:00Z',
        date: new Date('2024-08-10T10:30:00'),
        reasonForBan: 'Harassment',
        proof: {
            text: 'Chat logs',
            images: ['https://via.placeholder.com/150'],
            videos: []
        }
    },
    {
        id: 14,
        status: 'New',
        createdBy: createByUsers[3].username,  // MissPigglet
        service: 'Service D',
        assignedTo: assignedToUsers[0].username,  // Codies
        postedAt: '2024-06-01T00:00:00Z',
        date: new Date('2024-08-12T14:00:00'),
        reasonForBan: 'Spamming',
        proof: {
            text: 'Multiple spam reports',
            images: [],
            videos: ['https://www.w3schools.com/html/mov_bbb.mp4']
        }
    },
    {
        id: 15,
        status: 'Pending',
        createdBy: createByUsers[4].username,  // LittleMrKnowEverything
        service: 'Service E',
        assignedTo: assignedToUsers[2].username,  // NoWay
        postedAt: '2024-07-20T00:00:00Z',
        date: new Date('2024-08-14T09:00:00'),
        reasonForBan: 'Exploiting bugs',
        proof: {
            text: 'Bug exploitation video',
            images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
            videos: []
        }
    }
];

export { mockAppeals, createByUsers, assignedToUsers, mockServices };
