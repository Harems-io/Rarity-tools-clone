import React from 'react';
import Link from 'next/link';

export default React.forwardRef(({ to, prefetch, ...props }, ref) => {

  let linkProps = {
    prefetch: prefetch || false
  }

  linkProps = {
    ...linkProps,
    ...(typeof to === 'string' ? { href: to } : { href: to.href, as: to.as })
  }

  return(
    <>
      <Link {...linkProps}>
        <a {...props} ref={ref} />
      </Link>
      <style jsx>{`

      `}</style>
    </>
  )
});
