import { PropsWithChildren } from 'react';
import { useAccordion } from './AccordionContext';
import Button from '../Button/Button';
import styled, { css } from 'styled-components';

const AccordionPanel = ({ children }: PropsWithChildren) => {
  const { hide } = useAccordion();

  return (
    <PanelLayout>
      <div>{children}</div>
      <Button
        variant="secondary"
        size="x-small"
        $block={false}
        $style={css`
          justify-self: end;
          align-self: flex-end;
        `}
        onClick={hide}
      >
        접어두기
      </Button>
    </PanelLayout>
  );
};

export default AccordionPanel;

const PanelLayout = styled.div`
  display: grid;
  row-gap: 40px;

  margin-bottom: 10px;
`;
