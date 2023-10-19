import styled, { css } from 'styled-components';
import Typography from '../../common/Typography/Typography';
import MemberRecordList from '../MemberRecordList/MemberRecordList';

const MemberRecordContents = () => {
  return (
    <>
      <Title>
        <Typography
          variant="h2"
          $style={css`
            font-weight: 700;
          `}
        >
          OOO님의 스터디 기록
        </Typography>
      </Title>
      <MemberRecordList />
    </>
  );
};

export default MemberRecordContents;

const Title = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }
  }
`;
