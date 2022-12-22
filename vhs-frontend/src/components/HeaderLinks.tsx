import { Link } from 'react-router-dom';

export const HeaderLinks = () => {
  return (
    <>
      <Link to="/" style={{ color: 'var(--color-orange)' }}>
        Home
      </Link>
      <Link to="/vhs" style={{ color: 'var(--color-yellow)' }}>
        Discovery
      </Link>
      <Link to="/create" style={{ color: 'var(--color-lilac)' }}>
        Add VHS
      </Link>
    </>
  );
};
