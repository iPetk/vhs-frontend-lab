import { VhsThumbnail } from './VHSThumbnail';

interface Props extends React.CSSProperties {
  image?: string;
  vhsId: number;
  vhsTitle: string;
}

export const VhsCard = ({ image, vhsId, vhsTitle, ...rest }: Props) => {
  return (
    <div style={{ border: '1px solid black', width: '300px', ...rest }}>
      <div>
        <VhsThumbnail image={image} vhsTitle={vhsTitle} />
        <p>{vhsTitle}</p>
      </div>
    </div>
  );
};
