'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  adSlot,
  adFormat = 'auto',
  adLayout = '',
}) => {
  useEffect(() => {
    try {
      // Push the ad only on the client side
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading Google Ads:', error);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 rounded-md">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={`${process.env.PUBLIC_GOOGLE_ADSENSE_CLIENT}`} // Replace with your actual Google AdSense publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout || undefined}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;