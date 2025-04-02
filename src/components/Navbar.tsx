'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  // const pathname = usePathname();
  const t = useTranslations(); // 👈 Add this

  const changeLocale = (lang: string) => {
    // router.replace(pathname, { locale: lang });
    router.replace(
      {
        pathname: router.pathname,
      },
      undefined,
      { locale: lang }
    );
  };

  return (
    <nav className="bg-indigo-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">{t('navbar.title')}</h1>
        <div className="flex gap-3">
          {locale !== 'en' && (
            <Link href="/" className="bg-white text-indigo-900 px-4 py-2 rounded">
              Home
            </Link>
          )}
          <Link href="/lokalise" className="bg-white text-indigo-900 px-4 py-2 rounded">
            Lokalise Page
          </Link>
          <select
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
            className="text-black rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </nav>
  );
}








// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   return (
//     <nav className="bg-indigo-900 text-white py-4 px-6 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <h1 className="text-lg font-semibold">Roam a Country</h1>
//         <div className="flex gap-x-4">
//           {pathname !== "/" && (
//             <Link
//               href="/"
//               className="bg-white text-indigo-900 font-medium px-4 py-2 rounded hover:bg-gray-100"
//             >
//               Home
//             </Link>
//           )}
//           <Link
//             href="/lokalise"
//             className="bg-white text-indigo-900 font-medium px-4 py-2 rounded hover:bg-gray-100"
//           >
//             Lokalise Page
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
