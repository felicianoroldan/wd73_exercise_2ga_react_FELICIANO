function Navbar() {

  return (
    <>
    <nav className="nav bg-warning d-flex justify-content-between">
      <>
        <div className="d-flex justify-content-between ms-5">
          <img src="" alt="Logo" />
        </div>
      </>
      <a className="nav-link active ms-5" aria-current="page" href="#">Active</a>
      <a className="nav-link me-5" href="#">Link</a>
      <a className="nav-link me-5" href="#">Link</a>
      <a className="nav-link me-5" href="#">Link</a>
    </nav>
    </>
  )
}

export default Navbar