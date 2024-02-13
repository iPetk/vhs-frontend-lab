import placeholder from '../assets/placeholder.svg';

interface Props {
  image?: string;
  vhsTitle: string;
}

export const VhsThumbnail = ({ image, vhsTitle }: Props) => {
  return image ? <img src={`/${image}`} alt={vhsTitle} /> : <img src={placeholder} />;
};
