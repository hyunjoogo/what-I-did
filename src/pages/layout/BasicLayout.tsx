import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import Typography from '../../components/common/Typography/Typography';

type Props = {
  headerText: string;
  children: ReactNode;
};

const BasicLayout = ({ headerText, children }: Props) => {
  return (
    <>
      <Layout>
        <Typography
          variant="h2"
          $style={css`
            margin-bottom: 80px;
          `}
        >
          {headerText}
        </Typography>

        {children}
      </Layout>
    </>
  );
};

export default BasicLayout;

const Layout = styled.div`
  width: 520px;
  margin: 0 auto;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    width: 90%;

    h2 {
      font-size: 3.2rem;
    }

    input {
      font-size: 1.8rem;
      padding: 14px;
    }
  }
`;
