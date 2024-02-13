import { VhsThumbnail } from '../VHSThumbnail';

import './vhsCard.css';

interface Props {
  image?: string;
  vhsTitle: string;
}

export const VhsCard = ({ image, vhsTitle }: Props) => {
  return (
    <div className="card">
      <div className="card-image">
        <VhsThumbnail image={image} vhsTitle={vhsTitle} />
      </div>
      <p>{vhsTitle}</p>
    </div>
  );
};
