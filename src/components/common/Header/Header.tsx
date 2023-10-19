import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../../constants/routes';
import Typography from '../Typography/Typography';
import styled, { css } from 'styled-components';

const Header = () => {
  return (
    <Layout>
      <Link to={ROUTES_PATH.landing}>
        <Typography
          variant="h1"
          $style={css`
            display: inline;
            font-size: 4rem;
            font-weight: 200;
          `}
        >
          행동 기록
        </Typography>
      </Link>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  padding: 40px;

  display: flex;
`;

// const Emphasis = styled.span`
//   color: ${color.blue[500]};
// `;
