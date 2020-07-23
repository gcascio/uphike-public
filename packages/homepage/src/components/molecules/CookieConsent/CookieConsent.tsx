import { bemJoin } from 'bem-join';
import React, { useState } from 'react';

import Headline from '@uphike/components/Headline';
import Button from 'atoms/Button';
import Link from 'atoms/Link';
import Null from 'atoms/Null';

import './CookieConsent.scss';

const b = bemJoin('cookie-consent');
const pathToPrivacyPolicies = '/privacy';

const CookieConsent = (): JSX.Element => {
  const doNotTrack = navigator.doNotTrack === '1' || window.doNotTrack === '1';
  const cookies = document.cookie.split('; ');
  const [consentGiven, setConsentGiven] = useState(
    cookies.some((c) => c.startsWith(window.disableStr)),
  );

  const disableGoogleAnalytics = (disable: boolean): void => {
    document.cookie = `${window.disableStr}=${disable.toString()}; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/`;
    window[window.disableStr] = disable;
  };

  const handleAccept = (): void => {
    // Google Analytics
    disableGoogleAnalytics(false);

    setConsentGiven(true);
  };

  const handleDecline = (): void => {
    // Google Analytics
    disableGoogleAnalytics(true);

    setConsentGiven(true);
  };

  return consentGiven || doNotTrack ? <Null /> : (
    <div className={b()}>
      <Headline size={4} text="Yes, we also like cookies" />
      <p className={b('content')}>
        It’s important for us to understand your behaviour on our
        websites and to learn what we can improve in the future.
        Like everyone else, we achieve that through the use of cookies
        and analytics services.
        Make sure to check our <Link to={pathToPrivacyPolicies} target="_blank">privacy policies</Link>,
        if you want to learn more about that.
      </p>
      <div className={b('actions')}>
        <Button
          onClick={handleAccept}
          text="Alright, cookies are great"
          color="primary"
        />
        <Button
          onClick={handleDecline}
          text="Decline"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default CookieConsent;
