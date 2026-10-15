export const treeData = [
  {
    id: 'malaysia',
    label: 'Malaysia',
    children: [
      { id: 'selangor', label: 'Selangor', children: [{ id: 'kuala-lumpur', label: 'Kuala Lumpur' }, { id: 'petaling-jaya', label: 'Petaling Jaya' }] },
      { id: 'johor', label: 'Johor' },
      { id: 'penang', label: 'Penang' },
      { id: 'sarawak', label: 'Sarawak' },
    ],
  },
  {
    id: 'singapore',
    label: 'Singapore',
    children: [
      { id: 'central-region', label: 'Central Region' },
      { id: 'east-region', label: 'East Region' },
    ],
  },
  {
    id: 'indonesia',
    label: 'Indonesia',
    children: [
      { id: 'jakarta', label: 'Jakarta' },
      { id: 'bali', label: 'Bali' },
    ],
  },
]

export const customerData = {
  malaysia: [
    { id: 1, name: 'Ahmad Rahman', address: 'No. 12, Jalan Tun Razak', city: 'Kuala Lumpur', zip: '50400', country: 'Malaysia' },
    { id: 2, name: 'Siti Nur', address: 'Lot 45, Jalan Bukit Bintang', city: 'Kuala Lumpur', zip: '55100', country: 'Malaysia' },
    { id: 3, name: 'Kumar Nair', address: '6, Jalan Setia', city: 'Johor Bahru', zip: '81100', country: 'Malaysia' },
    { id: 4, name: 'Lina Tan', address: '88, Jalan Gurney', city: 'Penang', zip: '10250', country: 'Malaysia' },
    { id: 5, name: 'Daniel Lim', address: '21, Jalan Datuk', city: 'Kuching', zip: '93400', country: 'Malaysia' },
  ],
  selangor: [
    { id: 1, name: 'Maya Ismail', address: '7, Jalan SS 15', city: 'Subang Jaya', zip: '47500', country: 'Malaysia' },
    { id: 2, name: 'Farid Azmi', address: '55, Jalan PJU 1A', city: 'Petaling Jaya', zip: '47301', country: 'Malaysia' },
  ],
  'kuala-lumpur': [
    { id: 1, name: 'Nadia Hassan', address: '12, Jalan Ampang', city: 'Kuala Lumpur', zip: '50450', country: 'Malaysia' },
    { id: 2, name: 'Hariz Yusof', address: '8, Jalan Bukit Bintang', city: 'Kuala Lumpur', zip: '55100', country: 'Malaysia' },
  ],
  'petaling-jaya': [
    { id: 1, name: 'Alya Zain', address: '29, Jalan Bandar', city: 'Petaling Jaya', zip: '46000', country: 'Malaysia' },
  ],
  johor: [
    { id: 1, name: 'Wei Hong', address: '9, Jalan Tebrau', city: 'Johor Bahru', zip: '80300', country: 'Malaysia' },
  ],
  penang: [
    { id: 1, name: 'Cheng Lee', address: '14, Jalan Penang', city: 'George Town', zip: '10200', country: 'Malaysia' },
    { id: 2, name: 'Evelyn Ng', address: '41, Jalan Gurney', city: 'Butterworth', zip: '12000', country: 'Malaysia' },
  ],
  sarawak: [
    { id: 1, name: 'Bong Tan', address: '10, Jalan Song', city: 'Kuching', zip: '93300', country: 'Malaysia' },
  ],
  singapore: [
    { id: 1, name: 'Jason Tan', address: '23 Orchard Road', city: 'Singapore', zip: '238880', country: 'Singapore' },
    { id: 2, name: 'Rachel Lim', address: '18 Marina Blvd', city: 'Singapore', zip: '018980', country: 'Singapore' },
  ],
  'central-region': [
    { id: 1, name: 'Kevin Ong', address: '88 Raffles Place', city: 'Singapore', zip: '048624', country: 'Singapore' },
  ],
  'east-region': [
    { id: 1, name: 'Jasmine Lee', address: '3 East Coast Road', city: 'Singapore', zip: '428770', country: 'Singapore' },
  ],
  indonesia: [
    { id: 1, name: 'Dewi Sari', address: 'Jl. Sudirman No. 12', city: 'Jakarta', zip: '10220', country: 'Indonesia' },
    { id: 2, name: 'Raka Putra', address: 'Jl. Raya Kuta', city: 'Bali', zip: '80361', country: 'Indonesia' },
  ],
  jakarta: [
    { id: 1, name: 'Putri Wulandari', address: 'Jl. MH Thamrin 56', city: 'Jakarta', zip: '10350', country: 'Indonesia' },
  ],
  bali: [
    { id: 1, name: 'Gede Aria', address: 'Jl. Pantai Kuta 9', city: 'Bali', zip: '80361', country: 'Indonesia' },
  ],
}
