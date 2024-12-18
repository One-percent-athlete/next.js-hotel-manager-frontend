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
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Payment Date</th>
                  <th>Details</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11/02/2024</td>
                  <td>
                    <p className="m-0">Num of Rooms: 2</p>
                    <p className="m-0">Days of Stay: 3</p>
                    <p className="m-0">Num of Guests: 2</p>
                  </td>
                  <td>
                    <p className="m-0">
                      <Link href="#">Invoice</Link>
                    </p>
                    <p className="m-0">
                      Total Cost: 15,000 <small className="text-success">paid</small>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
