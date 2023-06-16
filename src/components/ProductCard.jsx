import Link from "next/link";

export default function ProductCard({ title , price , path }) { 
  return (
    <Link href={'/products/' + path} className='font-Urbanist uppercase shadow-sm w-5/12 h-24'>
      <div className='w-full h-full flex flex-col justify-center items-start'>
        <div className='border-b w-full h-1/2 p-2 flex flex-row justify-start items-center bg-gray-200'>
          <h1 className='font-bold text-xl'>
            {title.length > 20 ? title.slice(0 , 20) + '...' : title}
          </h1>
        </div>
        <div className='w-full h-1/2 p-2 flex flex-row justify-start items-center bg-gray-100'>
            <p className='font-Pacifico text-xl'>
              {
                '$ '+ price
              }
            </p>
        </div>
      </div>
    </Link>
  );
}
