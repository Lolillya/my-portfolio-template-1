import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    let routeName = router.pathname.split('/').pop();
    if (routeName == '')
      routeName = 'home';

    document.body.className = routeName || '';
  }, [router.pathname])

  return <Component {...pageProps} />
}
