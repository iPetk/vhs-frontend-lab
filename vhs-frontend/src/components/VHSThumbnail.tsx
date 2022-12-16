import { Link } from "react-router-dom";

type Props = {
  image?: string;
  vhsId: number;
  vhsTitle: string;
};

export const VhsThumbnail = ({ image, vhsId, vhsTitle }: Props) => {
  return (
    <div style={{ border: "1px solid black", width: "300px" }}>
      <Link to={`/${vhsId}`}>
        <div>
          <img src={image} alt={vhsTitle} style={{ maxWidth: "200px" }} />
          <p>{vhsTitle}</p>
        </div>
      </Link>
    </div>
  );
};
