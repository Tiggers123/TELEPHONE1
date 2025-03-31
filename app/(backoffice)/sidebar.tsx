import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-teal-600 h-screen w-64 fixed">
      <div className="p-5 bg-teal-800 text-white text-xl">
        <h1>TIGER PHONESHOP</h1>
        <div className="flex items-center gap-2 mt-3">
          <i className="fa fa-user"></i>
          <span className="w-full">
          TIGER 
          </span>
          <button
            className="bg-blue-500 rounded-full px-2 py-1"
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="bg-red-500 rounded-full px-2 py-1"
          >
            <i className="fa fa-sign-out-alt"></i>
          </button>
        </div>
      </div>

      <div className="p-5 text-white text-xl flex flex-col gap-2 mt-3">
        <div>
          <Link href="/dashboard">
            <div className="flex items-center">
              <i className="fa fa-tachometer-alt mr-2 w-[25px] text-center"></i>
              Dashboard
            </div>
          </Link>
        </div>

        <div>
          <Link href="/buy">
            <div className="flex items-center">
              <i className="fa fa-shopping-cart mr-2 w-[25px] text-center"></i>
              ซื้อสินค้า
            </div>
          </Link>
        </div>

        <div>
          <Link href="/sell">
            <div className="flex items-center">
              <i className="fa fa-dollar-sign mr-2 w-[25px] text-center"></i>
              ขายสินค้า
            </div>
          </Link>
        </div>

        <div>
          <Link href="/repair">
            <div className="flex items-center">
              <i className="fa fa-wrench mr-2 w-[25px] text-center"></i>
              รับซ่อม
            </div>
          </Link>
        </div>

        <div>
          <Link href="/company">
            <div className="flex items-center">
              <i className="fa fa-building mr-2 w-[25px] text-center"></i>
              ข้อมูลร้าน
            </div>
          </Link>
        </div>

        <div>
          <Link href="/user">
            <div className="flex items-center">
              <i className="fa fa-user mr-2 w-[25px] text-center"></i>
              ผู้ใช้งาน
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
