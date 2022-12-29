import { Link } from 'react-router-dom';
import { t } from 'i18next';

export const HeaderLinks = () => {
  return (
    <>
      <Link to="/" style={{ color: 'var(--color-orange)' }}>
        {t('header.links.home')}
      </Link>
      <Link to="/vhs" style={{ color: 'var(--color-yellow)' }}>
        {t('header.links.discover')}
      </Link>
      <Link to="/vhs/create" style={{ color: 'var(--color-lilac)' }}>
        {t('header.links.addVHS')}
      </Link>
    </>
  );
};
