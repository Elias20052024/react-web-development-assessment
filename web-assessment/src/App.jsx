import { useState } from 'react'
import './App.css'
import { customerData, treeData } from './data'

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Profile')
  const [selectedNode, setSelectedNode] = useState('malaysia')
  const [profileTab, setProfileTab] = useState('profile')
  const [loginForm, setLoginForm] = useState({ userId: '', password: '' })
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

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
    setIsUserLoggedIn(true)
    const output = `UserID: ${loginForm.userId}, Password: ${loginForm.password}`
    console.log('Login form submitted:', output)
    alert(output)
  }

  // The locations can be nested to different depths, so render each level the same way.
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

  if (!isUserLoggedIn) {
    return (
      <main className="page-shell">
        <div className="main-panel">
          <h1>Login</h1>
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
        </div>
      </main>
    )
  }

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
                {isUserLoggedIn && <p role="status">You are logged in.</p>}
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
                          <div className="action-buttons">
                            <button type="button" className="action-btn view" onClick={() => handleRowView(row)} aria-label={`View ${row.name}`}>
                              View
                            </button>
                            <button type="button" className="action-btn edit" aria-label={`Edit ${row.name}`}>
                              Edit
                            </button>
                            <button type="button" className="action-btn delete" aria-label={`Delete ${row.name}`}>
                              Delete
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
