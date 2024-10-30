import Link from 'next/link'

export default function RoomTypeCard() {
  return (
    <div className="col-4 mb-4">
      <div className="card" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
        <Link href="/rooms/" className="text-white">
          <img src="banners/banner2.jpg" className="img-thumbnail" />
        </Link>
        <div className="card-body hms-bg-dark text-white">
          <h5 className="card-title">
            <Link href="/rooms/single" className="text-white">
              Single
            </Link>
          </h5>
        </div>
      </div>
    </div>
  )
}