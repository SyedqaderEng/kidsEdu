import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumb() {
  const router = useRouter();
  const asPath = router.asPath.split('?')[0];
  const pathSegments = asPath.split('/').filter(seg => seg);
  const breadcrumbs = pathSegments.map((seg, idx) => {
    const href = '/' + pathSegments.slice(0, idx + 1).join('/');
    return {
      href,
      text: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
    };
  });

  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="breadcrumb">
      <ol className="list-reset flex">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-2">/</span>
            <Link href={crumb.href} className="hover:underline">
              {crumb.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
