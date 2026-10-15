import { useState } from 'react'
import './App.css'

const treeData = [
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

const customerData = {
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

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Profile')
  const [selectedNode, setSelectedNode] = useState('malaysia')
  const [profileTab, setProfileTab] = useState('profile')
  const [loginForm, setLoginForm] = useState({ userId: '', password: '' })

  const currentRows = customerData[selectedNode] || []

  const handleRowView = (row) => {
    console.log('Selected customer:', row)
    alert(`Viewing customer: ${row.name}`)
  }

  const handleLoginChange = (event) => {
    const { name, value } = event.target
    setLoginForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const output = `UserID: ${loginForm.userId}, Password: ${loginForm.password}`
    console.log('Login form submitted:', output)
    alert(output)
  }

  const renderTree = (nodes, level = 0) => (
    <ul className="tree-list" style={{ '--level': level }}>
      {nodes.map((node) => {
        const hasChildren = node.children && node.children.length > 0
        const isSelected = selectedNode === node.id

        return (
          <li key={node.id} className={isSelected ? 'tree-item selected' : 'tree-item'}>
            <button
              type="button"
              className="tree-node"
              onClick={() => setSelectedNode(node.id)}
            >
              {hasChildren ? <span className="tree-toggle">+</span> : <span className="tree-dot" />}
              <span>{node.label}</span>
            </button>
            {hasChildren && renderTree(node.children, level + 1)}
          </li>
        )
      })}
    </ul>
  )

  return (
    <main className="page-shell">
      <div className="main-panel">
        <header className="topbar">
          <span>Home</span>
          <strong>Home Tab.</strong>
        </header>

        <div className="content-row">
          <aside className="sidebar">
            {['Profile', 'Messages', 'Settings'].map((item) => (
              <button
                key={item}
                type="button"
                className={selectedMenu === item ? 'menu-item selected' : 'menu-item'}
                onClick={() => setSelectedMenu(item)}
              >
                {item}
              </button>
            ))}
          </aside>

          <div className="tree-panel">
            <div className="tree-panel-header">
              <button
                type="button"
                className={profileTab === 'profile' ? 'mini-tab active' : 'mini-tab'}
                onClick={() => setProfileTab('profile')}
              >
                Profile
              </button>
              <button
                type="button"
                className={profileTab === 'login' ? 'mini-tab active' : 'mini-tab'}
                onClick={() => setProfileTab('login')}
              >
                Login
              </button>
            </div>
            {profileTab === 'profile' ? (
              <div className="profile-box">
                <div className="profile-avatar">A</div>
                <h3>Alex Johnson</h3>
                <p>System Administrator</p>
              </div>
            ) : (
              <form className="login-box" onSubmit={handleLoginSubmit}>
                <label>
                  <span>UserID</span>
                  <input type="text" name="userId" value={loginForm.userId} onChange={handleLoginChange} />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" name="password" value={loginForm.password} onChange={handleLoginChange} />
                </label>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            )}
            {renderTree(treeData)}
          </div>

          <section className="table-panel">
            <div className="table-title">Customer Details</div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Pin Code</th>
                    <th>Country</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row) => (
                    <tr key={`${selectedNode}-${row.id}`}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.zip}</td>
                      <td>{row.country}</td>
                      <td>
                        <div className="action-icons">
                          <button type="button" className="icon-btn view" onClick={() => handleRowView(row)} aria-label={`View ${row.name}`}>
                            👁
                          </button>
                          <button type="button" className="icon-btn edit" aria-label={`Edit ${row.name}`}>
                            ✎
                          </button>
                          <button type="button" className="icon-btn delete" aria-label={`Delete ${row.name}`}>
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span>Showing 5 out of 25 entries</span>
              <div className="pagination">
                <button type="button">‹</button>
                <button type="button" className="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">›</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
