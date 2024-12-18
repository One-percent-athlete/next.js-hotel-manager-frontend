import Link from 'next/link'
import DashboardSidebar from '@/components/user/DashboardSidebar'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="card">
            <h3 className="card-header py-2">Change Password</h3>
            <div className="card-body">
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" name="password"/>
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" name="password1"/>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <Link className="btn btn-secondary" href="/user/profile">
                    Cancel
                  </Link>
                  <button className="btn btn-danger ms-2">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
