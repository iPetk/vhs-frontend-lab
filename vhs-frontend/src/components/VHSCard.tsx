import { VhsThumbnail } from './VHSThumbnail';

interface Props extends React.CSSProperties {
  image?: string;
  vhsTitle: string;
}

export const VhsCard = ({ image, vhsTitle, ...rest }: Props) => {
  return (
    <div style={{ border: '1px solid black', width: '300px', ...rest }}>
      <div>
        <VhsThumbnail image={image} vhsTitle={vhsTitle} />
        <p>{vhsTitle}</p>
      </div>
    </div>
  );
};
