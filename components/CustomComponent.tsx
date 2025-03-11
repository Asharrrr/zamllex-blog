import { PortableTextComponents } from '@portabletext/react';
import { Suspense } from 'react';

export const components: PortableTextComponents = {
    block: {
        h4: ({ children }) => (
            <Suspense fallback={<h4>Loading...</h4>}>
                <h4 className='text-3xl font-bold text-accentDarkPrimary'>{children}</h4>
            </Suspense>
        )
    },

    listItem: {
        bullet: ({ children }) => (
            <Suspense fallback={<li>Loading...</li>}>
                <li className='list-disc marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>
            </Suspense>
        )
    },

    marks: {
        strong: ({ children }) => (
            <Suspense fallback={<strong>Loading...</strong>}>
                <strong className='font-bold text-dark dark:text-white'>{children}</strong>
            </Suspense>
        )
    }
};



// import {PortableTextComponents} from '@portabletext/react';

// export const components:PortableTextComponents = {
//     block:{
//         h4:({children})=><h4 className='text-3xl font-bold text-accentDarkPrimary'>{children}</h4>

//     },

//     listItem:{
//         bullet:({children})=><li className='list-disc marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>
//     },

//     marks:{
//         strong:({children})=><strong className='font-bold text-dark dark:text-white'>{children}</strong>
//     }
// }