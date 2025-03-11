import { Suspense } from "react";


export default function Container({children}:{children:React.ReactNode}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="px-6 xs:px-8 sm:px-12  lg:px-16 xl:px-24 2xl:px-32">
      {children}
    </div>
    </Suspense>
  )
}