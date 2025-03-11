import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-light dark:bg-dark">
      {/* Image Section */}
      <div className="relative w-full h-56">
        <Image
          src={urlForImage(post.image)}
          alt={post.title}
          width={400} // Set fixed width for optimization
          height={224} // Maintain aspect ratio
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
          style={{ width: "100%", height: "auto" }} // Maintain aspect ratio
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-dark dark:text-light line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {post.summary}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 px-4 py-2 text-center bg-amber-400 hover:bg-amber-500 transition-colors duration-300 text-dark font-semibold rounded"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { urlForImage } from "@/sanity/lib/image";

// export default function BlogCard({ post }: { post: Post }) {
//   return (
//     <section className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-light dark:bg-dark">
//       {/* Image Section */}
//       <div className="relative w-full h-56">
//         <Image
//           src={urlForImage(post.image)}
//           alt={post.title}
//           width={400} // Set fixed width for optimization
//           height={224} // Maintain aspect ratio
//           className=" object-cover group-hover:scale-105 transition-transform duration-500"
//           priority
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-4 flex flex-col gap-3">
//         <h2 className="text-xl font-bold text-dark dark:text-light line-clamp-2">
//           {post.title}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
//           {post.summary}
//         </p>

//         {/* Read More Button */}
//         <Link
//           href={`/blog/${post.slug}`}
//           className="mt-4 px-4 py-2 text-center bg-amber-400 hover:bg-amber-500 transition-colors duration-300 text-dark font-semibold rounded"
//         >
//           Read More
//         </Link>
//       </div>
//     </section>
//   );
// }


// import Image from "next/image";
// import Link from "next/link";
// import { urlForImage } from "@/sanity/lib/image";

// export default function BlogCard({ post }: { post: Post }) {
//   return (
//     <section className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-light dark:bg-dark">
//       {/* Image Section */}
//       <div className="relative w-full h-56">
//         <Image
//           src={urlForImage(post.image)}
//           alt={post.title}
//           width="auto" // Set a proper width
//           height="auto" // Set a proper height
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           priority
//         />
//       </div>

//       {/* Content Section */}
//       <div className="p-4 flex flex-col gap-3">
//         <h2 className="text-xl font-bold text-dark dark:text-light line-clamp-2">
//           {post.title}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
//           {post.summary}
//         </p>

//         {/* Read More Button */}
//         <Link
//           href={`/blog/${post.slug}`}
//           className="mt-4 px-4 py-2 text-center bg-amber-400 hover:bg-amber-500 transition-colors duration-300 text-dark font-semibold rounded"
//         >
//           Read More
//         </Link>
//       </div>
//     </section>
//   );
// }




// import Image from "next/image";
// import Link from "next/link";
// // import { urlForImage } from "../../sanity/lib/image";
// import { urlForImage } from "@/sanity/lib/image"
// import { Suspense } from "react";


// export default function BlogCard({post}:{post:Post}) {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//     <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
//       {/* Image Section*/}
//       <div className="relative max-h-76 flex-1">
//         <Image
//           src={urlForImage(post.image)}
//           alt={post.title}
//           height={200}
//           width={400}
//           // className="object-cover rounded-t"
//           priority // Ensures it's not lazily loaded

//           />
//       </div>

//       {/* Title and Summary */}
//       <div className="flex flex-col justify-between gapx-y-4  p-4">
//         <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
//           {post.title}
//         </h2>
//         <p className="text-dark/70 dark:text-light/70 line-clamp-3">
//           {post.summary}
//         </p>

//         {/* Read More dynamic Link */}
//         <Link
//           href={`/blog/${post.slug}`}
//           className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
//           >
//           Read More
//         </Link>
//       </div>
//     </section>
//       </Suspense>
//   );
// }