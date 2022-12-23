import { Placeholder } from '@assets';

interface Props {
  image?: string;
  vhsTitle: string;
}

export const VhsThumbnail = ({ image, vhsTitle }: Props) => {
  return (
    <div>
      {image ? (
        <img src={`/${image}`} alt={vhsTitle} style={{ maxWidth: '200px' }} />
      ) : (
        <Placeholder />
      )}
    </div>
  );
};
