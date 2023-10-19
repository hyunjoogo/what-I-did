import React, { PropsWithChildren } from 'react';
import { useAccordion } from './AccordionContext';
import Button from '../Button/Button';
import styled from 'styled-components';

const AccordionHeader = ({ children }: PropsWithChildren) => {
  const { isShow, show } = useAccordion();

  return (
    <AccordionHeaderLayout>
      {children}
      {!isShow && (
        <Button variant="secondary" size="x-small" onClick={show}>
          펼쳐보기
        </Button>
      )}
    </AccordionHeaderLayout>
  );
};

export default AccordionHeader;

const AccordionHeaderLayout = styled.div`
  min-height: 60px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 20px;
`;
