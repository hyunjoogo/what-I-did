import type { PropsWithChildren } from 'react';

import styled, { css, CSSProp } from 'styled-components';
import { AccordionProvider } from './AccordionContext';
import { Children } from 'react';
import AccordionPanel from './AccordionPanel';
import AccordionHeader from './AccordionHeader';
import AccordionItem from './AccordionItem';

type Props = {
  $style?: CSSProp;
};

const Accordion = ({ children, $style }: PropsWithChildren<Props>) => {
  return (
    <AccordionLayout $style={$style}>
      {Children.map(children, (child) => (
        <AccordionProvider>{child}</AccordionProvider>
      ))}
    </AccordionLayout>
  );
};

export default Accordion;

Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;
Accordion.Item = AccordionItem;

const AccordionLayout = styled.ul<Props>`
  display: grid;
  row-gap: 40px;

  height: fit-content;

  ${({ $style }) => css`
    ${$style}
  `}
`;
